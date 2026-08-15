(function () {
    if (window.__marcoLoader) return;
    window.__marcoLoader = true;

    // --- ZOOM LOCK INJECTION (Prevents pinch-to-zoom & double tap zoom) ---
    (function() {
        var meta = document.querySelector('meta[name="viewport"]');
        if (meta) {
            meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
        } else {
            meta = document.createElement('meta');
            meta.name = "viewport";
            meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
            document.head.appendChild(meta);
        }
        
        var zoomStyle = document.createElement('style');
        zoomStyle.innerHTML = "html, body { touch-action: pan-x pan-y; -ms-touch-action: pan-x pan-y; }";
        if (document.head) {
            document.head.appendChild(zoomStyle);
        } else {
            document.documentElement.appendChild(zoomStyle);
        }
    })();
    // ----------------------------------------------------------------------

    // --- AUTO COOKIE INJECTOR FOR DOWNLOAD DOMAINS ---
    (function() {
        var expDate = new Date();
        expDate.setTime(expDate.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 year expiry
        var expires = "expires=" + expDate.toUTCString();
        
        var clearanceCookie = "cf_clearance=TmWVGQJv5rAJpJfbnVJ9iqbzOpmspkBo_Dd__0xc1Nw-1786634194-1.2.1.1-JngZrfdqM_k2sZsDoKmzeoYoeNOwEx2dBOa8p65wf1.f2Lg_WHTLeYl1UwlxO7O2pRH0Lnok9oH6CZnCOQkZXw8YsoUUOo0NcNZAw1_.8CvlhWkPg13GT2tpjDyZ0nqLAnp68P4L064Scrz7uPLl10Ii50CrVc6vndsXAUGDmvGUUQXjiHWc1uHNazJs3Wd86KuUcahtdb4G4eZA0dIFeOmACcy.ohEWu_2ZG9BAOOuUkt04diVZMANTj0FvY1kZm3t6lBqc3bIDqZ5AItYnuwCoFBTa0d31yCISDC_Al4FZdMtT3zLzOLUKpuvLU1QZmvkocZDHd1vHEHCUjcg_WCtuIe3_RUvwJWO5.65AZfk; " + expires + "; path=/; Secure; SameSite=None";
        var accessCookie = "download_access=SnNXfbAAKUWXVYGQKun22Z36i9fwrTCTw0Wtl9m7qWAgg-YaLZ8WFhc97twhwWe4y-rsJmnEoEiFAND4wNYQUoe-kXqVUrOIQKrXpSN6x8i63R_cQ9kqX5WOIrl1R4lP-bCARHdxpRXDj985MkLLbMYe1tQZZKx7; " + expires + "; path=/; Secure; SameSite=None";

        document.cookie = clearanceCookie + "; domain=.pwthor.site";
        document.cookie = accessCookie + "; domain=.pwthor.site";
        document.cookie = clearanceCookie + "; domain=.pwthor.live";
        document.cookie = accessCookie + "; domain=.pwthor.live";
    })();
    // -----------------------------------------------------

    // --- ZERO-FLASH CSS INJECTION ---
    var style = document.createElement('style');
    style.innerHTML = 'img[src*="pwthor.live/logo.png"] { opacity: 0 !important; visibility: hidden !important; }';
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.documentElement.appendChild(style);
    }
    // -----------------------------------------------------------------------------------

    // --- GLOBAL FONT STYLE INJECTION ---
    var fontStyle = document.createElement('style');
    fontStyle.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Montserrat:wght@400;500;600;700;800&display=swap'); * { font-family: 'Montserrat', sans-serif !important; }";
    if (document.head) {
        document.head.appendChild(fontStyle);
    } else {
        document.documentElement.appendChild(fontStyle);
    }
    // -----------------------------------------------------------------------------------

    // CACHE KEY BUMPED TO V38 FOR NUCLEAR PDF INTERCEPTION
    var KEY = "marco_cached_js_v39"; 
    var URL = "https://cdn.jsdelivr.net/gh/raghu554tiwari-lang/homepage-ui@main/layout.js";
    var BLOCK_STATUS_URL = "https://marco-magic-loader.lovable.app/api/public/block-status";
    var BLOCK_KEY = "marco_block_state";
    var CACHE_TS_KEY = KEY + "_ts";
    var RUN_ONCE_KEY = "__marcoLayoutRunning";

    function renderBlockPage() {
        try { document.documentElement.innerHTML = '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Server Switching</title></head><body></body>'; } catch (e) { }
        var html = '<div style="font-family:Arial,sans-serif;background:#f5f8ff;min-height:100vh;padding:20px;display:flex;justify-content:center;align-items:center;"><div style="width:90%;max-width:900px;background:white;padding:30px;border-radius:20px;box-shadow:0 0 20px rgba(0,0,0,0.1);"><div style="text-align:center;"><h1 style="font-size:48px;color:#0b2f80;margin:0;">ApexLecture</h1><p style="font-size:22px;">Powered by Marco</p></div><div style="background:#fff8e6;padding:20px;border-left:6px solid orange;border-radius:10px;margin:20px 0;"><h2>⚠ Important Announcement</h2><p>We want to inform you about an important update regarding our services.</p></div><div style="background:#fff0f0;padding:20px;border-left:6px solid red;border-radius:10px;margin:20px 0;"><h2>© Copyright Claim Notice</h2><p>We have received a copyright claim from Physics Wallah regarding some content available on our platform. Due to this,our current hosting provider has issued a takedown notice.</p></div><div style="background:#fff5f5;padding:20px;border-left:6px solid crimson;border-radius:10px;margin:20px 0;"><h2>❌ Server Suspension Notice</h2><p>Our current server will be suspended within the next<b>24 hours</b>. To avoid downtime,we are switching to a new and improved server.</p></div><div style="background:#f2f6ff;padding:20px;border-left:6px solid blue;border-radius:10px;margin:20px 0;"><h2>⏳ Migration in Progress</h2><p>This process may take some time. During this transition,you may experience interruptions or limited access.</p></div><div style="background:#f0fff5;padding:20px;border-left:6px solid green;border-radius:10px;margin:20px 0;"><h2>🌐 Visit Our Website</h2><p>For updates and resources,please visit:</p><a href="https://studyuk.site.je" style="display:inline-block;background:green;color:white;padding:10px 20px;border-radius:8px;text-decoration:none;font-size:20px;">studyuk.site.je</a></div><div style="text-align:center;margin-top:30px;"><h2 style="color:#0b2f80;">Be patient,we will be back soon with a new server.</h2><p style="font-size:22px;">Love ♥ by Marco</p></div></div></div>';
        function paint() {
            if (document.body) {
                document.body.innerHTML = html;
                document.body.style.cssText = "margin:0;padding:0;overflow:auto;";
            } else {
                setTimeout(paint, 20);
            }
        }
        paint();
        window.__marcoBlocked = true;
    }

    function unBlock() {
        if (window.__marcoBlocked) {
            window.__marcoBlocked = false;
            location.reload();
        }
    }
    
    var cachedBlock = localStorage.getItem(BLOCK_KEY);
    if (cachedBlock === "1") { renderBlockPage(); }
    
    function checkBlockStatus() {
        fetch(BLOCK_STATUS_URL + "?t=" + Date.now(), { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (d) {
            var enabled = !!(d && d.enabled);
            if (enabled) {
                localStorage.setItem(BLOCK_KEY, "1");
                if (!window.__marcoBlocked) renderBlockPage();
            } else {
                var was = localStorage.getItem(BLOCK_KEY);
                localStorage.setItem(BLOCK_KEY, "0");
                if (was === "1" && window.__marcoBlocked) unBlock();
            }
        }).catch(function () { });
    }
    checkBlockStatus();
    setInterval(checkBlockStatus, 5000);
    if (window.__marcoBlocked) { return; }

    function showLoader() {
        if (document.getElementById("marcoGlobalLoader")) return;
        var div = document.createElement("div");
        div.id = "marcoGlobalLoader";
        div.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999999;background:linear-gradient(135deg,#0f0c29,#302b63,#24243e);display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:sans-serif;";
        div.innerHTML = '<div style="color:#fff;font-size:28px;font-weight:bold;letter-spacing:2px;">PW-MARCO</div><div style="color:#bbb;margin-top:10px;">Loading your experience...</div><div style="margin-top:20px;width:40px;height:40px;border:4px solid #fff;border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite;"></div>';
        var style = document.createElement("style");
        style.innerHTML = "@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}";
        document.head.appendChild(style);
        document.documentElement.appendChild(div);
    }

    function hideLoader() {
        var el = document.getElementById("marcoGlobalLoader");
        if (el) el.remove();
    }
    
    if (sessionStorage.getItem("marco_redirect") === "1") {
        showLoader();
        sessionStorage.removeItem("marco_redirect");
    }

    var vpnOverlayShown = false;
    var ABSTRACT_KEY = "0ba8cb0c043c4ddf883fa57b05e91418";
    
    function showVpnOverlay() {
        if (document.getElementById("marcoVpnOverlay")) return;
        vpnOverlayShown = true;
        var overlay = document.createElement("div");
        overlay.id = "marcoVpnOverlay";
        overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999999999;background:linear-gradient(135deg,#1a0000,#3d0000,#1a0000);display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:sans-serif;padding:24px;box-sizing:border-box;text-align:center;";
        overlay.innerHTML = '<div style="font-size:60px;">🚫</div><div style="color:#ff4444;font-size:26px;font-weight:bold;margin-top:10px;">VPN Detected</div><div style="color:#eee;margin-top:14px;max-width:420px;line-height:1.5;">A VPN or proxy connection has been detected on your device. This app does not work with VPN enabled. Please disable your VPN to continue.</div><div style="margin-top:20px;background:rgba(255,255,255,0.08);padding:16px;border-radius:10px;max-width:420px;text-align:left;color:#ddd;font-size:14px;line-height:1.6;"><div style="color:#fff;font-weight:bold;margin-bottom:8px;">HOW TO DISABLE VPN</div>1. Open your phone Settings<br>2. Go to VPN or Network &amp;Internet<br>3. Toggle off the active VPN connection<br>4. If using a VPN app,open it and press Disconnect<br>5. Return to this app and reopen it</div><div style="color:#aaa;margin-top:18px;font-size:13px;">You will be redirected shortly...</div>';
        document.documentElement.appendChild(overlay);
        setTimeout(function () { window.location.href = "https://homepage-pw-marco.netlify.app"; }, 4000);
    }

    function checkCloudflare() {
        return fetch("https://1.1.1.1/cdn-cgi/trace", { cache: "no-store" }).then(function (r) { return r.text(); }).then(function (txt) {
            var warp = (txt.match(/warp=(\S+)/) || [])[1];
            var ip = (txt.match(/ip=(\S+)/) || [])[1];
            return { warp: warp, ip: ip };
        }).catch(function () { return { warp: null, ip: null }; });
    }

    function checkAbstract(ip) {
        var url = "https://ipgeolocation.abstractapi.com/v1/?api_key=" + ABSTRACT_KEY;
        if (ip) url += "&ip_address=" + ip;
        return fetch(url, { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (d) {
            var sec = d && d.security;
            if (!sec) return false;
            return !!(sec.is_vpn || sec.is_proxy || sec.is_tor || sec.is_hosting);
        }).catch(function () { return false; });
    }

    function checkIpApi(ip) {
        var url = "https://ip-api.com/json/" + (ip || "") + "?fields=proxy,hosting";
        return fetch(url, { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (d) {
            return !!(d && (d.proxy || d.hosting));
        }).catch(function () { return false; });
    }

    function checkVpn() {
        if (vpnOverlayShown) return;
        checkCloudflare().then(function (cf) {
            if (vpnOverlayShown) return;
            if (cf.warp === "on" || cf.warp === "plus") { showVpnOverlay(); return; }
            var ip = cf.ip || "";
            Promise.all([checkAbstract(ip), checkIpApi(ip)]).then(function (results) {
                if (vpnOverlayShown) return;
                if (results[0] === true || results[1] === true) { showVpnOverlay(); }
            });
        });
    }
    
    checkVpn();
    setInterval(function () { if (!vpnOverlayShown) checkVpn(); }, 3000);

    function run(code) {
        if (window[RUN_ONCE_KEY]) return;
        window[RUN_ONCE_KEY] = true;
        
        // --- POWERFUL ANTI-REDIRECT FIX ---
        if (code) {
            code = code.replace(/!el\.dataset\.marcoPatchedDownload/g, "false");
            code = code.replace(/window\.open\s*=\s*function/g, "window.__disabledOpen = function");
            code = code.split('https://download-pw-marco.lovable.app/').join('https://download.pwthor.live/');
        }
        // ----------------------------------

        try { new Function(code)(); } catch (e) { window[RUN_ONCE_KEY] = false; console.log("Run error", e); }
    }

    function warmNetworkCache() {
        try {
            var h = document.head || document.documentElement;
            [["dns-prefetch", "//cdn.jsdelivr.net"], ["preconnect", "https://cdn.jsdelivr.net"], ["preload", URL]].forEach(function (x) {
                var l = document.createElement("link");
                l.rel = x[0]; l.href = x[1];
                if (x[0] === "preload") l.as = "script";
                h.appendChild(l);
            });
        } catch (e) { }
    }

    function saveFresh(code) {
        if (code && code.length > 50) {
            try { localStorage.setItem(KEY, code); localStorage.setItem(CACHE_TS_KEY, String(Date.now())); } catch (e) { }
            return true;
        }
        return false;
    }

    function fetchFresh(cb) {
        var done = false;
        function finish(code) {
            if (done || !(code && code.length > 50)) return;
            done = true; cb(code);
        }
        try { fetch(URL, { cache: "force-cache", mode: "cors" }).then(function (r) { return r.ok ? r.text() : ""; }).then(finish).catch(function () { }); } catch (e) { }
        try { var xhr = new XMLHttpRequest(); xhr.open("GET", URL, true); xhr.onload = function () { finish(xhr.responseText); }; xhr.send(); } catch (e) { }
    }

    // --- ENHANCED LOGO WATCHER ---
    function startLogoWatcher() {
        var newLogoUrl = "https://i.ibb.co/PZThbjmf/1000002876-removebg-preview-2.png";
        
        function replaceLogo() {
            document.querySelectorAll('img').forEach(function (img) {
                if (img.dataset.logoReplaced) return;
                
                if (img.src && img.src.indexOf('pwthor.live/logo.png') !== -1) {
                    img.dataset.logoReplaced = '1';
                    img.src = newLogoUrl;
                    img.style.cssText = 'opacity:1!important; visibility:visible!important; width:42px!important; height:42px!important; object-fit:cover!important; border-radius:50%!important;';
                    return;
                }

                var rect = img.getBoundingClientRect();
                if (rect.top < 120 && rect.left < 80 && rect.width > 20 && rect.width < 120 && rect.height > 20 && rect.height < 120) {
                    img.dataset.logoReplaced = '1';
                    img.src = newLogoUrl;
                    img.style.cssText = 'opacity:1!important; visibility:visible!important; width:42px!important; height:42px!important; object-fit:cover!important; border-radius:50%!important;';
                }
            });
        }

        new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    if (node.nodeType === 1) { 
                        if (node.tagName === 'IMG' && node.src && node.src.indexOf('pwthor.live/logo.png') !== -1) {
                            node.src = newLogoUrl;
                            node.style.cssText = 'opacity:1!important; visibility:visible!important; width:42px!important; height:42px!important; object-fit:cover!important; border-radius:50%!important;';
                            node.dataset.logoReplaced = '1';
                        }
                        if (node.querySelectorAll) {
                            var imgs = node.querySelectorAll('img[src*="pwthor.live/logo.png"]');
                            imgs.forEach(function (img) {
                                img.src = newLogoUrl;
                                img.style.cssText = 'opacity:1!important; visibility:visible!important; width:42px!important; height:42px!important; object-fit:cover!important; border-radius:50%!important;';
                                img.dataset.logoReplaced = '1';
                            });
                        }
                    }
                });
            });
            replaceLogo();
        }).observe(document.documentElement, { childList: true, subtree: true });

        setTimeout(replaceLogo, 800);
        setTimeout(replaceLogo, 2000);
    }

    warmNetworkCache();
    var cached = localStorage.getItem(KEY);
    if (cached) {
        run(cached);
        startLogoWatcher();
        var bgUpdate = function () {
            fetchFresh(function (code) { if (code !== cached) saveFresh(code); });
        };
        if (window.requestIdleCallback) { requestIdleCallback(bgUpdate, { timeout: 2500 }); } else { setTimeout(bgUpdate, 1200); }
    } else {
        fetchFresh(function (code) { saveFresh(code); run(code); startLogoWatcher(); });
    }

    // --- ENHANCED TEXT, POPUP UI REPLACER & BLUR ---
    (function () {
        var REPLACEMENTS = [
            ["try doing airplane mode 3-4 times.// network issue airplane mode dalo 3-4 baar.", "This batch is currently unavailable for stream contact Marco or any other admin to solve this problem"],
            ["PWThor User", "PW-MARCO User"], 
            ["PWThor", "PW-MARCO"], 
            ["pwthor", "PW-MARCO"], 
            ["PWTHOR", "PW-MARCO"], 
            ["PW THOR", "PW-MARCO"],
            ["Generate Access Key", "Downloader Token Expired"],
            ["Please generate and verify a key to download videos for the next 24 hours.", "Please contact admins and request to add new token to download video."],
            ["If you do not have a verified encrypted cookie, downloads stay locked. After verification, this browser will be trusted for 24 hours.", "Your download token has expired or is invalid. Please request an administrator to securely add a new token to your account."],
            ["The generated short link must be opened completely to verify this device.", "Once the admin adds your new token, please refresh this page to unlock downloads."]
        ];

        function replaceInText(val) {
            if (!val || typeof val !== 'string') return { text: val, changed: false };
            var out = val;
            var changed = false;
            for (var i = 0; i < REPLACEMENTS.length; i++) {
                if (out.indexOf(REPLACEMENTS[i][0]) !== -1) {
                    out = out.split(REPLACEMENTS[i][0]).join(REPLACEMENTS[i][1]);
                    changed = true;
                }
            }
            return { text: out, changed: changed };
        }

        function walk(node) {
            if (!node) return;
            if (node.nodeType === 3) {
                var res = replaceInText(node.nodeValue);
                if (res.changed) node.nodeValue = res.text;
                return;
            }
            if (node.nodeType === 1) {
                var tag = node.tagName.toUpperCase();
                if (tag === "SCRIPT" || tag === "STYLE" || tag === "INPUT" || tag === "TEXTAREA") return;
                
                if (node.hasAttribute) {
                    ["placeholder", "title", "alt", "aria-label"].forEach(function (attr) {
                        var attrV = node.getAttribute(attr);
                        if (attrV) {
                            var res = replaceInText(attrV);
                            if (res.changed) node.setAttribute(attr, res.text);
                        }
                    });
                }
                var c = node.childNodes;
                for (var i = 0; i < c.length; i++) walk(c[i]);
            }
        }

        function patchAdminButtons() {
            document.querySelectorAll('button, .btn, [role="button"]').forEach(function(btn) {
                var text = (btn.innerText || btn.textContent || "").trim();
                if ((text.indexOf('Generate Key') !== -1 || text.indexOf('Contact Admin') !== -1) && !btn.dataset.adminPatched) {
                    btn.dataset.adminPatched = '1';
                    var newBtn = btn.cloneNode(true);
                    newBtn.innerHTML = 'Contact Admin';
                    newBtn.dataset.adminPatched = '1';
                    newBtn.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open('https://t.me/official_marco_22', '_blank');
                    });
                    if (btn.parentNode) {
                        btn.parentNode.replaceChild(newBtn, btn);
                    }
                }
            });
        }

        function blurUrlInput() {
            document.querySelectorAll('input').forEach(function(inp) {
                if (inp.value && (inp.value.indexOf('streamenc') !== -1 || inp.value.indexOf('p01--') !== -1)) {
                    if (!inp.dataset.isBlurred) {
                        inp.dataset.isBlurred = '1';
                        inp.style.color = 'transparent';
                        inp.style.textShadow = '0 0 10px rgba(0,0,0,0.6)';
                        inp.style.filter = 'blur(5px)';
                        inp.style.pointerEvents = 'none';
                        inp.style.userSelect = 'none';
                    }
                }
            });
        }
        
        function runReplace() {
            if (document.body) walk(document.body);
            if (document.title) {
                var res = replaceInText(document.title);
                if (res.changed) document.title = res.text;
            }
            patchAdminButtons();
            blurUrlInput();
        }
        
        runReplace();
        setTimeout(runReplace, 500);
        setTimeout(runReplace, 1500);
        
        try {
            var mo = new MutationObserver(function (muts) {
                muts.forEach(function (m) {
                    if (m.type === "characterData") {
                        var res = replaceInText(m.target.nodeValue);
                        if (res.changed) m.target.nodeValue = res.text;
                    } else if (m.addedNodes) {
                        m.addedNodes.forEach(walk);
                    }
                });
                patchAdminButtons();
                blurUrlInput();
            });
            mo.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
            
            setInterval(function() {
                blurUrlInput();
                patchAdminButtons();
            }, 500);
        } catch (e) { }
    })();

    (function () {
        function addEduGenius() {
            if (document.querySelector('[data-edugenius-item]')) return true;
            var testSeriesEl = null;
            document.querySelectorAll('*').forEach(function (el) {
                if (el.children.length <= 2 && el.textContent.trim() === 'Test Series') { testSeriesEl = el; }
            });
            if (!testSeriesEl) return false;
            var container = testSeriesEl.closest('li') || testSeriesEl.closest('a') || testSeriesEl.parentElement;
            if (!container) return false;
            var parent = container.parentElement;
            if (!parent) return false;
            var newItem = container.cloneNode(true);
            newItem.setAttribute('data-edugenius-item', 'true');
            function replaceText(node) {
                if (node.nodeType === 3) {
                    if (node.textContent.trim() === 'Test Series') node.textContent = node.textContent.replace('Test Series', 'EduGenius');
                } else {
                    node.childNodes.forEach(replaceText);
                }
            }
            replaceText(newItem);
            newItem.classList.remove('active', 'selected', 'current');
            newItem.querySelectorAll('.active,.selected,.current').forEach(function (el) { el.classList.remove('active', 'selected', 'current'); });
            var iconEl = newItem.querySelector('svg,img,[class*="icon"]');
            if (iconEl) {
                var aiSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                aiSvg.setAttribute('width', '24'); aiSvg.setAttribute('height', '24'); aiSvg.setAttribute('viewBox', '0 0 24 24'); aiSvg.setAttribute('fill', 'none'); aiSvg.setAttribute('stroke', 'currentColor'); aiSvg.setAttribute('stroke-width', '2'); aiSvg.setAttribute('stroke-linecap', 'round'); aiSvg.setAttribute('stroke-linejoin', 'round');
                aiSvg.innerHTML = '<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>';
                iconEl.replaceWith(aiSvg);
            }
            newItem.style.cursor = 'pointer';
            newItem.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); window.open('https://edugenius-marco.lovable.app', '_blank'); });
            var anchor = newItem.querySelector('a');
            if (anchor) {
                anchor.href = 'https://edugenius-marco.lovable.app'; anchor.target = '_blank';
                anchor.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); window.open('https://edugenius-marco.lovable.app', '_blank'); });
            }
            parent.insertBefore(newItem, container.nextSibling);
            return true;
        }
        if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', addEduGenius); } else { addEduGenius(); }
        setTimeout(addEduGenius, 500); setTimeout(addEduGenius, 1500); setTimeout(addEduGenius, 3000);
        var obs = new MutationObserver(function () { addEduGenius(); });
        obs.observe(document.documentElement, { childList: true, subtree: true });
    })();

    // --- APEX LECTURES INJECTOR ---
    (function () {
        function addApexLectures() {
            document.querySelectorAll('*').forEach(function (el) {
                if (el.children.length === 0 && el.textContent.trim() === 'Welcome Back' && !el.dataset.apexAdded) {
                    el.dataset.apexAdded = 'true';
                    var apexHeader = document.createElement('div');
                    apexHeader.textContent = 'ApexLectures';
                    apexHeader.style.cssText = "font-family: 'Caveat', cursive !important; font-size: 46px; font-weight: 700; text-align: center; margin-bottom: 5px; letter-spacing: 2px; line-height: 1.2; background: linear-gradient(90deg, #9333ea, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; drop-shadow: 0px 4px 6px rgba(0,0,0,0.2);";
                    if (el.parentNode) { el.parentNode.insertBefore(apexHeader, el); }
                }
            });
        }
        if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', addApexLectures); } else { addApexLectures(); }
        setTimeout(addApexLectures, 500); setTimeout(addApexLectures, 1500); setTimeout(addApexLectures, 3000);
        var obsApex = new MutationObserver(function () { addApexLectures(); });
        obsApex.observe(document.documentElement, { childList: true, subtree: true });
    })();

    // --- SMART ALTERNATIVE DOWNLOADER INJECTOR ---
    (function () {
        function getRedirectUrl() {
            var vidUrl = "";
            var inputs = document.querySelectorAll('input');
            for (var i = 0; i < inputs.length; i++) {
                var val = inputs[i].value;
                if (val && (val.indexOf('streamenc') !== -1 || val.indexOf('.m3u8') !== -1 || val.indexOf('p01--') !== -1)) { vidUrl = val; break; }
            }
            if (!vidUrl) {
                var href = window.location.href;
                if (href.indexOf("?url=") !== -1) { vidUrl = href.split("?url=")[1].split("&")[0]; } 
                else if (href.indexOf("url=") !== -1) { vidUrl = href.split("url=")[1].split("&")[0]; }
            }
            if (vidUrl) {
                try { vidUrl = decodeURIComponent(vidUrl); } catch(e) {}
                return "https://pwxyro.ai.studio/?url=" + vidUrl;
            }
            return null;
        }

        function createAltButton(id) {
            if (document.getElementById(id)) return null;
            var btn = document.createElement('button');
            btn.id = id;
            btn.innerHTML = '✨ Alternative Downloader';
            btn.style.cssText = 'display: block; width: 100%; margin-top: 15px; margin-bottom: 10px; padding: 14px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; font-size: 15px; font-weight: bold; text-align: center; border-radius: 8px; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(0, 242, 254, 0.4); text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.3s ease;';
            btn.addEventListener('click', function (e) {
                e.preventDefault(); e.stopPropagation();
                var targetUrl = getRedirectUrl();
                if (targetUrl) { window.location.href = targetUrl; } else { alert("Video URL detect nahi hua. Padhai rukni nahi chahiye, admin ko contact karo!"); }
            });
            return btn;
        }

        function injectAltDownloader() {
            var adminBtns = document.querySelectorAll('button[data-admin-patched="1"], .btn[data-admin-patched="1"]');
            adminBtns.forEach(function (adminBtn) {
                if (!adminBtn.dataset.altBtnAdded) {
                    adminBtn.dataset.altBtnAdded = "1";
                    var altBtn = createAltButton('alt-btn-admin-' + Math.random().toString(36).substr(2, 5));
                    if (altBtn && adminBtn.parentNode) {
                        var wrapper = document.createElement('div');
                        wrapper.style.width = '100%'; wrapper.appendChild(altBtn);
                        adminBtn.parentNode.insertBefore(wrapper, adminBtn.nextSibling);
                    }
                }
            });

            var allDivs = document.querySelectorAll('div, section');
            for (var i = 0; i < allDivs.length; i++) {
                var el = allDivs[i];
                if (el.textContent && el.textContent.indexOf('SYSTEM_LOGS') !== -1 && el.clientHeight >= 80 && el.children.length > 0) {
                    var isMainContainer = true;
                    for (var j = 0; j < el.children.length; j++) {
                        var child = el.children[j];
                        if (child.textContent && child.textContent.indexOf('SYSTEM_LOGS') !== -1 && child.clientHeight >= 50) { isMainContainer = false; break; }
                    }
                    if (isMainContainer && !el.dataset.altBtnAdded) {
                        el.dataset.altBtnAdded = "1";
                        var altBtnLogs = createAltButton('alt-btn-logs-' + Math.random().toString(36).substr(2, 5));
                        if (altBtnLogs && el.parentNode) {
                            var wrapperLogs = document.createElement('div');
                            wrapperLogs.style.width = '100%'; wrapperLogs.style.marginTop = '15px'; wrapperLogs.appendChild(altBtnLogs);
                            el.parentNode.insertBefore(wrapperLogs, el.nextSibling);
                        }
                    }
                }
            }
        }
        setInterval(injectAltDownloader, 1000);
        var obsAlt = new MutationObserver(injectAltDownloader);
        obsAlt.observe(document.documentElement, { childList: true, subtree: true });
    })();
    // ---------------------------------------

    // --- NUCLEAR IN-APP PDF VIEWER & INTERCEPTOR (V38) ---
    (function () {
        function createPdfViewer(pdfUrl) {
            if (document.getElementById('marcoPdfViewer')) return;
            
            var overlay = document.createElement('div');
            overlay.id = 'marcoPdfViewer';
            overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000;z-index:9999999999;display:flex;flex-direction:column;';
            
            var header = document.createElement('div');
            header.style.cssText = 'height:55px;background:linear-gradient(135deg, #0f0c29, #302b63);display:flex;justify-content:space-between;align-items:center;padding:0 20px;color:white;box-shadow:0 2px 10px rgba(0,0,0,0.5);font-family:sans-serif;';
            
            var title = document.createElement('div');
            title.innerText = '📄 PW-MARCO Viewer';
            title.style.cssText = 'font-weight:bold;font-size:16px;letter-spacing:1px;';
            
            var closeBtn = document.createElement('button');
            closeBtn.innerText = '✖ Close';
            closeBtn.style.cssText = 'background:#ff4444;color:white;border:none;padding:8px 15px;border-radius:5px;cursor:pointer;font-weight:bold;box-shadow:0 2px 5px rgba(0,0,0,0.3);';
            closeBtn.onclick = function() { overlay.remove(); };
            
            header.appendChild(title);
            header.appendChild(closeBtn);
            
            var iframe = document.createElement('iframe');
            iframe.src = 'https://docs.google.com/gview?embedded=true&url=' + encodeURIComponent(pdfUrl);
            iframe.style.cssText = 'flex:1;width:100%;border:none;background:#f5f5f5;';
            
            overlay.appendChild(header);
            overlay.appendChild(iframe);
            document.documentElement.appendChild(overlay);
        }

        // 1. OVEERRIDE BROWSER'S NATIVE CLICK FUNCTION (Blocks programmatic clicks by JS)
        var originalClick = HTMLAnchorElement.prototype.click;
        HTMLAnchorElement.prototype.click = function() {
            var href = this.getAttribute('href') || this.href || '';
            if (href.toLowerCase().indexOf('.pdf') !== -1) {
                createPdfViewer(href);
                return; // Stop the forced download click
            }
            return originalClick.apply(this, arguments);
        };

        // 2. Intercept window.open completely
        var originalWindowOpen = window.open;
        window.open = function(url, target, features) {
            if (url && typeof url === 'string' && url.toLowerCase().indexOf('.pdf') !== -1) {
                createPdfViewer(url);
                return null; 
            }
            return originalWindowOpen.call(window, url, target, features);
        };

        // 3. Ultra-Aggressive click capture (Blocks standard user clicks)
        document.addEventListener('click', function(e) {
            var target = e.target.closest('a, button, div, span, [onclick], [data-url], [data-href]');
            if (!target) return;

            var href = target.getAttribute('href') || target.getAttribute('data-url') || target.getAttribute('data-href');
            
            if (href && href.toLowerCase().indexOf('.pdf') !== -1) {
                e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
                createPdfViewer(href);
                return;
            }

            if (target.onclick) {
                var clickStr = target.onclick.toString();
                var match = clickStr.match(/(https?:\/\/[^\s'"]+\.pdf)/i);
                if (match) {
                    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
                    createPdfViewer(match[1]);
                    return;
                }
            }
        }, true);

        // 4. MutationObserver to strip 'download' attributes the second elements are rendered
        var pdfObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { 
                        if (node.tagName === 'A' && node.href && node.href.toLowerCase().indexOf('.pdf') !== -1) {
                            node.removeAttribute('download');
                            node.removeAttribute('target');
                            node.addEventListener('click', function(e) {
                                e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
                                createPdfViewer(this.href);
                            }, true);
                        }
                        if (node.querySelectorAll) {
                            node.querySelectorAll('a[href*=".pdf"], a[href*=".PDF"]').forEach(function(a) {
                                a.removeAttribute('download');
                                a.removeAttribute('target');
                                a.addEventListener('click', function(e) {
                                    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
                                    createPdfViewer(this.href);
                                }, true);
                            });
                        }
                    }
                });
            });
        });
        pdfObserver.observe(document.documentElement, { childList: true, subtree: true });

        // 5. Fallback loop just to be 100% sure
        setInterval(function() {
            document.querySelectorAll('a').forEach(function(a) {
                var href = a.getAttribute('href');
                if (href && href.toLowerCase().indexOf('.pdf') !== -1) {
                    if (a.hasAttribute('download') || a.hasAttribute('target')) {
                        a.removeAttribute('download');
                        a.removeAttribute('target');
                    }
                    if (!a.dataset.marcoPdfPatched) {
                        a.dataset.marcoPdfPatched = '1';
                        a.onclick = function(e) {
                            e.preventDefault(); e.stopPropagation();
                            createPdfViewer(href);
                        };
                    }
                }
            });
        }, 500);
    })();
    // --------------------------------------------------------

    if (document.readyState === "complete") {
        setTimeout(hideLoader, 800);
    } else {
        window.addEventListener("load", function () { setTimeout(hideLoader, 500); });
    }
    setTimeout(hideLoader, 5000);
})();
