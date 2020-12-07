package oauth

import (
	"bufio"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/cli/browser"
	"github.com/cli/oauth/api"
	"github.com/cli/oauth/device"
)

// DeviceFlow captures the full OAuth Device flow, including prompting the user to copy a one-time
// code and opening their web browser, and returns an access token upon completion.
func (oa *OAuthFlow) DeviceFlow() (*api.AccessToken, error) {
	httpClient := oa.HTTPClient
	if httpClient == nil {
		httpClient = http.DefaultClient
	}

	stdin := oa.Stdin
	if stdin == nil {
		stdin = os.Stdin
	}
	stdout := oa.Stdout
	if stdout == nil {
		stdout = os.Stdout
	}

	code, err := device.RequestCode(httpClient, deviceInitURL(oa.Hostname), oa.ClientID, oa.Scopes)
	if err != nil {
		return nil, err
	}

	fmt.Fprintf(stdout, "First, copy your one-time code: %s\n", code.UserCode)
	fmt.Fprint(stdout, "Then press [Enter] to continue in the web browser... ")
	_ = waitForEnter(stdin)

	browseURL := oa.BrowseURL
	if browseURL == nil {
		browseURL = browser.OpenURL
	}

	if err = browseURL(code.VerificationURI); err != nil {
		return nil, fmt.Errorf("error opening the web browser: %w", err)
	}

	return device.PollToken(httpClient, tokenURL(oa.Hostname), oa.ClientID, code)
}

func waitForEnter(r io.Reader) error {
	scanner := bufio.NewScanner(r)
	scanner.Scan()
	return scanner.Err()
}