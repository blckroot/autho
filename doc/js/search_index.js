var search_data = {"index":{"searchIndex":["license","readme","access_token.go","access_token_test.go","form.go","form_test.go","device_flow.go","device_flow_test.go","examples_test.go","poller.go","examples_test.go","go.mod","go.sum","oauth.go","oauth_device.go","oauth_webapp.go","license","readme","browser.go","browser_darwin.go","browser_freebsd.go","browser_linux.go","browser_openbsd.go","browser_unsupported.go","browser_windows.go","zbrowser_windows.go","license","readme","access_token.go","form.go","device_flow.go","poller.go","oauth.go","oauth_device.go","oauth_webapp.go","local_server.go","webapp_flow.go","license","patents","unsafeheader.go","aliases.go","dll_windows.go","empty.s","env_windows.go","eventlog.go","exec_windows.go","memory_windows.go","mkerrors.bash","mkknownfolderids.bash","mksyscall.go","race.go","race0.go","security_windows.go","service.go","setupapi_windows.go","str.go","syscall.go","syscall_windows.go","types_windows.go","types_windows_386.go","types_windows_amd64.go","types_windows_arm.go","types_windows_arm64.go","zerrors_windows.go","zknownfolderids_windows.go","zsyscall_windows.go","modules","examples_test.go","local_server.go","local_server_test.go","webapp_flow.go","webapp_flow_test.go"],"longSearchIndex":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"info":[["LICENSE","","LICENSE.html","","<p>MIT License\n<p>Copyright © 2020 GitHub, Inc.\n<p>Permission is hereby granted, free of charge, to any person …\n"],["README","","README_md.html","","<p>oauth\n<p>A library for Go client applications that need to perform OAuth authorization against a server, …\n"],["access_token.go","","api/access_token_go.html","","<p>package api\n<p>// AccessToken is an OAuth access token. type AccessToken struct {\n\n<pre>// The token value, typically ...</pre>\n"],["access_token_test.go","","api/access_token_test_go.html","","<p>package api\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;net/url&quot;</span>\n<span class=\"ruby-string\">&quot;reflect&quot;</span>\n<span class=\"ruby-string\">&quot;testing&quot;</span>\n</pre>\n"],["form.go","","api/form_go.html","","<p>// Package api implements request and response parsing logic shared between different OAuth strategies. …\n"],["form_test.go","","api/form_test_go.html","","<p>package api\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;bytes&quot;</span>\n<span class=\"ruby-string\">&quot;io/ioutil&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n<span class=\"ruby-string\">&quot;net/url&quot;</span>\n<span class=\"ruby-string\">&quot;reflect&quot;</span>\n<span class=\"ruby-string\">&quot;testing&quot;</span>\n</pre>\n"],["device_flow.go","","device/device_flow_go.html","","<p>// Package device facilitates performing OAuth Device Authorization Flow for client applications // such …\n"],["device_flow_test.go","","device/device_flow_test_go.html","","<p>package device\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;bytes&quot;</span>\n<span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;errors&quot;</span>\n<span class=\"ruby-string\">&quot;io/ioutil&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n<span class=\"ruby-string\">&quot;net/url&quot;</span>\n<span class=\"ruby-string\">&quot;reflect&quot;</span>\n<span class=\"ruby-string\">&quot;testing&quot;</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["examples_test.go","","device/examples_test_go.html","","<p>package device_test\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n<span class=\"ruby-string\">&quot;os&quot;</span>\n\n<span class=\"ruby-string\">&quot;github.com/cli/oauth/device&quot;</span>\n</pre>\n"],["poller.go","","device/poller_go.html","","<p>package device\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;time&quot;</span>\n</pre>\n"],["examples_test.go","","examples_test_go.html","","<p>package oauth_test\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;os&quot;</span>\n\n<span class=\"ruby-string\">&quot;github.com/cli/oauth&quot;</span>\n</pre>\n"],["go.mod","","go_mod.html","","<p>module blckroot/autho\n<p>go 1.19\n<p>require (\n"],["go.sum","","go_sum.html","","<p>github.com/cli/browser v1.0.0/go.mod h1:IEWkHYbLjkhtjwwWlwTHW2lGxeS5gezEQBMLTwDHf5Q= github.com/cli/browser …\n"],["oauth.go","","oauth_go.html","","<p>// Package oauth is a library for Go client applications that need to perform OAuth authorization // …\n"],["oauth_device.go","","oauth_device_go.html","","<p>package oauth\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;bufio&quot;</span>\n<span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;io&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n<span class=\"ruby-string\">&quot;os&quot;</span>\n\n<span class=\"ruby-string\">&quot;github.com/cli/browser&quot;</span>\n<span class=\"ruby-string\">&quot;github.com/cli/oauth/api&quot;</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["oauth_webapp.go","","oauth_webapp_go.html","","<p>package oauth\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n\n<span class=\"ruby-string\">&quot;github.com/cli/browser&quot;</span>\n<span class=\"ruby-string\">&quot;github.com/cli/oauth/api&quot;</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["LICENSE","","vendor/github_com/cli/browser/LICENSE.html","","<p>Copyright © 2014, Dave Cheney &lt;dave@cheney.net&gt; All rights reserved.\n<p>Redistribution and use in …\n"],["README","","vendor/github_com/cli/browser/README_md.html","","<p>browser\n<p>Helpers to open URLs, readers, or files in the system default web browser.\n<p>This fork adds:\n"],["browser.go","","vendor/github_com/cli/browser/browser_go.html","","<p>// Package browser provides helpers to open files, readers, and urls in a browser window. // // The choice …\n"],["browser_darwin.go","","vendor/github_com/cli/browser/browser_darwin_go.html","","<p>package browser\n<p>import “os/exec”\n<p>func openBrowser(url string) error {\n"],["browser_freebsd.go","","vendor/github_com/cli/browser/browser_freebsd_go.html","","<p>package browser\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;errors&quot;</span>\n<span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;os/exec&quot;</span>\n</pre>\n"],["browser_linux.go","","vendor/github_com/cli/browser/browser_linux_go.html","","<p>package browser\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;os/exec&quot;</span>\n<span class=\"ruby-string\">&quot;strings&quot;</span>\n</pre>\n"],["browser_openbsd.go","","vendor/github_com/cli/browser/browser_openbsd_go.html","","<p>package browser\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;errors&quot;</span>\n<span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;os/exec&quot;</span>\n</pre>\n"],["browser_unsupported.go","","vendor/github_com/cli/browser/browser_unsupported_go.html","","<p>// +build !linux,!windows,!darwin,!openbsd,!freebsd\n<p>package browser\n<p>import (\n"],["browser_windows.go","","vendor/github_com/cli/browser/browser_windows_go.html","","<p>//go:generate mkwinsyscall -output zbrowser_windows.go browser_windows.go //sys shellExecute(hwnd int, …\n"],["zbrowser_windows.go","","vendor/github_com/cli/browser/zbrowser_windows_go.html","","<p>// Code generated by ‘go generate’; DO NOT EDIT.\n<p>package browser\n<p>import (\n"],["LICENSE","","vendor/github_com/cli/oauth/LICENSE.html","","<p>MIT License\n<p>Copyright © 2020 GitHub, Inc.\n<p>Permission is hereby granted, free of charge, to any person …\n"],["README","","vendor/github_com/cli/oauth/README_md.html","","<p>oauth\n<p>A library for Go client applications that need to perform OAuth authorization against a server, …\n"],["access_token.go","","vendor/github_com/cli/oauth/api/access_token_go.html","","<p>package api\n<p>// AccessToken is an OAuth access token. type AccessToken struct {\n\n<pre>// The token value, typically ...</pre>\n"],["form.go","","vendor/github_com/cli/oauth/api/form_go.html","","<p>// Package api implements request and response parsing logic shared between different OAuth strategies. …\n"],["device_flow.go","","vendor/github_com/cli/oauth/device/device_flow_go.html","","<p>// Package device facilitates performing OAuth Device Authorization Flow for client applications // such …\n"],["poller.go","","vendor/github_com/cli/oauth/device/poller_go.html","","<p>package device\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;time&quot;</span>\n</pre>\n"],["oauth.go","","vendor/github_com/cli/oauth/oauth_go.html","","<p>// Package oauth is a library for Go client applications that need to perform OAuth authorization // …\n"],["oauth_device.go","","vendor/github_com/cli/oauth/oauth_device_go.html","","<p>package oauth\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;bufio&quot;</span>\n<span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;io&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n<span class=\"ruby-string\">&quot;os&quot;</span>\n\n<span class=\"ruby-string\">&quot;github.com/cli/browser&quot;</span>\n<span class=\"ruby-string\">&quot;github.com/cli/oauth/api&quot;</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["oauth_webapp.go","","vendor/github_com/cli/oauth/oauth_webapp_go.html","","<p>package oauth\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n\n<span class=\"ruby-string\">&quot;github.com/cli/browser&quot;</span>\n<span class=\"ruby-string\">&quot;github.com/cli/oauth/api&quot;</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["local_server.go","","vendor/github_com/cli/oauth/webapp/local_server_go.html","","<p>package webapp\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;io&quot;</span>\n<span class=\"ruby-string\">&quot;net&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n</pre>\n"],["webapp_flow.go","","vendor/github_com/cli/oauth/webapp/webapp_flow_go.html","","<p>// Package webapp implements the OAuth Web Application authorization flow for client applications by …\n"],["LICENSE","","vendor/golang_org/x/sys/LICENSE.html","","<p>Copyright © 2009 The Go Authors. All rights reserved.\n<p>Redistribution and use in source and binary forms, …\n"],["PATENTS","","vendor/golang_org/x/sys/PATENTS.html","","<p>Additional IP Rights Grant (Patents)\n<p>“This implementation” means the copyrightable works distributed …\n"],["unsafeheader.go","","vendor/golang_org/x/sys/internal/unsafeheader/unsafeheader_go.html","","<p>// Copyright 2020 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["aliases.go","","vendor/golang_org/x/sys/windows/aliases_go.html","","<p>// Copyright 2018 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["dll_windows.go","","vendor/golang_org/x/sys/windows/dll_windows_go.html","","<p>// Copyright 2011 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["empty.s","","vendor/golang_org/x/sys/windows/empty_s.html","","<p>// Copyright 2019 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["env_windows.go","","vendor/golang_org/x/sys/windows/env_windows_go.html","","<p>// Copyright 2010 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["eventlog.go","","vendor/golang_org/x/sys/windows/eventlog_go.html","","<p>// Copyright 2012 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["exec_windows.go","","vendor/golang_org/x/sys/windows/exec_windows_go.html","","<p>// Copyright 2009 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["memory_windows.go","","vendor/golang_org/x/sys/windows/memory_windows_go.html","","<p>// Copyright 2017 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["mkerrors.bash","","vendor/golang_org/x/sys/windows/mkerrors_bash.html","","<p>#!/bin/bash\n<p># Copyright 2019 The Go Authors. All rights reserved. # Use of this source code is governed …\n"],["mkknownfolderids.bash","","vendor/golang_org/x/sys/windows/mkknownfolderids_bash.html","","<p>#!/bin/bash\n<p># Copyright 2019 The Go Authors. All rights reserved. # Use of this source code is governed …\n"],["mksyscall.go","","vendor/golang_org/x/sys/windows/mksyscall_go.html","","<p>// Copyright 2009 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["race.go","","vendor/golang_org/x/sys/windows/race_go.html","","<p>// Copyright 2012 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["race0.go","","vendor/golang_org/x/sys/windows/race0_go.html","","<p>// Copyright 2012 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["security_windows.go","","vendor/golang_org/x/sys/windows/security_windows_go.html","","<p>// Copyright 2012 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["service.go","","vendor/golang_org/x/sys/windows/service_go.html","","<p>// Copyright 2012 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["setupapi_windows.go","","vendor/golang_org/x/sys/windows/setupapi_windows_go.html","","<p>// Copyright 2021 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["str.go","","vendor/golang_org/x/sys/windows/str_go.html","","<p>// Copyright 2009 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["syscall.go","","vendor/golang_org/x/sys/windows/syscall_go.html","","<p>// Copyright 2009 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["syscall_windows.go","","vendor/golang_org/x/sys/windows/syscall_windows_go.html","","<p>// Copyright 2009 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["types_windows.go","","vendor/golang_org/x/sys/windows/types_windows_go.html","","<p>// Copyright 2011 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["types_windows_386.go","","vendor/golang_org/x/sys/windows/types_windows_386_go.html","","<p>// Copyright 2011 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["types_windows_amd64.go","","vendor/golang_org/x/sys/windows/types_windows_amd64_go.html","","<p>// Copyright 2011 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["types_windows_arm.go","","vendor/golang_org/x/sys/windows/types_windows_arm_go.html","","<p>// Copyright 2018 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["types_windows_arm64.go","","vendor/golang_org/x/sys/windows/types_windows_arm64_go.html","","<p>// Copyright 2011 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style …\n"],["zerrors_windows.go","","vendor/golang_org/x/sys/windows/zerrors_windows_go.html","","<p>// Code generated by ‘mkerrors.bash’; DO NOT EDIT.\n<p>package windows\n<p>import “syscall”\n"],["zknownfolderids_windows.go","","vendor/golang_org/x/sys/windows/zknownfolderids_windows_go.html","","<p>// Code generated by ‘mkknownfolderids.bash’; DO NOT EDIT.\n<p>package windows\n<p>type KNOWNFOLDERID  …\n"],["zsyscall_windows.go","","vendor/golang_org/x/sys/windows/zsyscall_windows_go.html","","<p>// Code generated by ‘go generate’; DO NOT EDIT.\n<p>package windows\n<p>import (\n"],["modules","","vendor/modules_txt.html","","<p># github.com/cli/browser v1.1.0 ## explicit; go 1.13 github.com/cli/browser # github.com/cli/oauth v1.0.0 …\n"],["examples_test.go","","webapp/examples_test_go.html","","<p>package webapp_test\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n<span class=\"ruby-string\">&quot;os&quot;</span>\n\n<span class=\"ruby-string\">&quot;github.com/cli/browser&quot;</span>\n<span class=\"ruby-string\">&quot;github.com/cli/oauth/webapp&quot;</span>\n</pre>\n"],["local_server.go","","webapp/local_server_go.html","","<p>package webapp\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;fmt&quot;</span>\n<span class=\"ruby-string\">&quot;io&quot;</span>\n<span class=\"ruby-string\">&quot;net&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n</pre>\n"],["local_server_test.go","","webapp/local_server_test_go.html","","<p>package webapp\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;bytes&quot;</span>\n<span class=\"ruby-string\">&quot;errors&quot;</span>\n<span class=\"ruby-string\">&quot;net&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n<span class=\"ruby-string\">&quot;testing&quot;</span>\n</pre>\n"],["webapp_flow.go","","webapp/webapp_flow_go.html","","<p>// Package webapp implements the OAuth Web Application authorization flow for client applications by …\n"],["webapp_flow_test.go","","webapp/webapp_flow_test_go.html","","<p>package webapp\n<p>import (\n\n<pre class=\"ruby\"><span class=\"ruby-string\">&quot;bytes&quot;</span>\n<span class=\"ruby-string\">&quot;context&quot;</span>\n<span class=\"ruby-string\">&quot;io/ioutil&quot;</span>\n<span class=\"ruby-string\">&quot;net&quot;</span>\n<span class=\"ruby-string\">&quot;net/http&quot;</span>\n<span class=\"ruby-string\">&quot;net/url&quot;</span>\n<span class=\"ruby-string\">&quot;testing&quot;</span>\n</pre>\n"]]}}