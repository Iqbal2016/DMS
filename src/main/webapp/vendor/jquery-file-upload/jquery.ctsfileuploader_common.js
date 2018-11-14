! function($) {
    "use strict";
    $.fn.fileuploader = function(q) {
        return this.each(function(t, r) {
            var s = $(r),
                p = null,
                o = null,
                l = null,
                sl = [],
                n = $.extend(!0, {}, $.fn.fileuploader.defaults, q),
                f = {
                    init: function() {
                        return s.closest(".fileuploader").length || s.wrap('<div class="fileuploader"></div>'), p = s.closest(".fileuploader"), f.set("attrOpts"), f.isSupported() ? (!n.beforeRender || !$.isFunction(n.beforeRender) || !1 !== n.beforeRender(p, s)) && (f.redesign(), n.files && f.files.append(n.files), f.rendered = !0, n.afterRender && $.isFunction(n.afterRender) && n.afterRender(l, p, o, s), void(f.disabled || f.bindUnbindEvents(!0))) : (n.onSupportError && $.isFunction(n.onSupportError) && n.onSupportError(p, s), !1)
                    },
                    bindUnbindEvents: function(e) {
                        e && f.bindUnbindEvents(!1), s[e ? "on" : "off"](f._assets.getAllEvents(), f.onEvent), n.changeInput && o !== s && o[e ? "on" : "off"]("click", f.clickHandler), n.dragDrop && n.dragDrop.container.length && (n.dragDrop.container[e ? "on" : "off"]("drag dragstart dragend dragover dragenter dragleave drop", function(e) {
                            e.preventDefault()
                        }), n.dragDrop.container[e ? "on" : "off"]("drop", f.dragDrop.onDrop), n.dragDrop.container[e ? "on" : "off"]("dragover", f.dragDrop.onDragEnter), n.dragDrop.container[e ? "on" : "off"]("dragleave", f.dragDrop.onDragLeave)), f.isUploadMode() && n.clipboardPaste && $(window)[e ? "on" : "off"]("paste", f.clipboard.paste), s.closest("form")[e ? "on" : "off"]("reset", f.reset)
                    },
                    redesign: function() {
                        if (o = s, n.theme && p.addClass("fileuploader-theme-" + n.theme), n.changeInput) {
                            switch ((typeof n.changeInput).toLowerCase()) {
                                case "boolean":
                                    o = $('<div class="fileuploader-input"><div class="fileuploader-input-caption"><span>' + f._assets.textParse(n.captions.feedback) + '</span></div><div class="fileuploader-input-button"><span>' + f._assets.textParse(n.captions.button) + "</span></div></div>");
                                    break;
                                case "string":
                                    " " != n.changeInput && (o = $(f._assets.textParse(n.changeInput, n)));
                                    break;
                                case "object":
                                    o = $(n.changeInput);
                                    break;
                                case "function":
                                    o = $(n.changeInput(s, p, n, f._assets.textParse))
                            }
                            s.after(o), s.css({
                                position: "absolute",
                                "z-index": "-9999",
                                height: "0",
                                width: "0",
                                padding: "0",
                                margin: "0",
                                "line-height": "0",
                                outline: "0",
                                border: "0",
                                opacity: "0"
                            })
                        }
                        n.thumbnails && f.thumbnails.create(), n.dragDrop && (n.dragDrop = "object" != typeof n.dragDrop ? {
                            container: null
                        } : n.dragDrop, n.dragDrop.container = n.dragDrop.container ? $(n.dragDrop.container) : o)
                    },
                    clickHandler: function(e) {
                        e.preventDefault(), f.clipboard._timer ? f.clipboard.clean() : s.click()
                    },
                    onEvent: function(e) {
                        switch (e.type) {
                            case "focus":
                                p && p.addClass("fileuploader-focused");
                                break;
                            case "blur":
                                p && p.removeClass("fileuploader-focused");
                                break;
                            case "change":
                                f.onChange.call(this);
                        }
                        n.listeners && $.isFunction(n.listeners[e.type]) && n.listeners[e.type].call(s, p)
                    },
                    set: function(e, t) {
                        switch (e) {
                            case "attrOpts":
                                for (var a = ["limit", "maxSize", "fileMaxSize", "extensions", "changeInput", "theme", "addMore", "listInput", "files"], i = 0; i < a.length; i++) {
                                    var l = "data-fileuploader-" + a[i];
                                    if (f._assets.hasAttr(l)) switch (a[i]) {
                                        case "changeInput":
                                        case "addMore":
                                        case "listInput":
                                            n[a[i]] = ["true", "false"].indexOf(s.attr(l)) > -1 ? "true" == s.attr(l) : s.attr(l);
                                            break;
                                        case "extensions":
                                            n[a[i]] = s.attr(l).replace(/ /g, "").split(",");
                                            break;
                                        case "files":
                                            n[a[i]] = JSON.parse(s.attr(l));
                                            break;
                                        default:
                                            n[a[i]] = s.attr(l)
                                    }
                                    s.removeAttr(l)
                                }
                                null == s.attr("disabled") && null == s.attr("readonly") && 0 !== n.limit || (f.disabled = !0), (!n.limit || n.limit && n.limit >= 2) && (s.attr("multiple", "multiple"), n.inputNameBrackets && "[]" != s.attr("name").slice(-2) && s.attr("name", s.attr("name") + "[]")), !0 === n.listInput && (n.listInput = $('<input type="hidden" name="fileuploader-list-' + s.attr("name").replace("[]", "").split("[").pop().replace("]", "") + '">').insertBefore(s)), "string" == typeof n.listInput && 0 == $(n.listInput).length && (n.listInput = $('<input type="hidden" name="' + n.listInput + '">').insertBefore(s)), f.set("disabled", f.disabled), !n.fileMaxSize && n.maxSize && (n.fileMaxSize = n.maxSize);
                                break;
                            case "disabled":
                                f.disabled = t, p[f.disabled ? "addClass" : "removeClass"]("fileuploader-disabled"), s[f.disabled ? "attr" : "removeAttr"]("disabled", "disabled"), f.rendered && f.bindUnbindEvents(!t);
                                break;
                            case "feedback":
                                t || (t = f._assets.textParse(f._itFl.length > 0 ? n.captions.feedback2 : n.captions.feedback, {
                                    length: f._itFl.length
                                })), $(!o.is(":file")) && o.find(".fileuploader-input-caption span").html(t);
                                break;
                            case "input":
                                r = f._assets.copyAllAttributes($('<input type="file">'), s, !0);
                                f.bindUnbindEvents(!1), s.after(s = r).remove(), f.bindUnbindEvents(!0);
                                break;
                            case "prevInput":
                                sl.length > 0 && (f.bindUnbindEvents(!1), sl[t].remove(), sl.splice(t, 1), s = sl[sl.length - 1], f.bindUnbindEvents(!0));
                                break;
                            case "nextInput":
                                var r = f._assets.copyAllAttributes($('<input type="file">'), s);
                                f.bindUnbindEvents(!1), sl.length > 0 && 0 == sl[sl.length - 1].get(0).files.length ? s = sl[sl.length - 1] : (-1 == sl.indexOf(s) && sl.push(s), sl.push(r), s.after(s = r)), f.bindUnbindEvents(!0);
                                break;
                            case "listInput":
                                n.listInput && n.listInput.val(null === t ? f.files.list(!0) : t)
                        }
                    },
                    onChange: function(e, t) {
                        var a = s.get(0).files;
                        if (t) {
                            if (!t.length) return f.set("input", ""), f.files.clear(), !1;
                            a = t
                        }
                        if (f.clipboard._timer && f.clipboard.clean(), !f.isDefaultMode() || (f.reset(), 0 != a.length)) {
                            if (n.beforeSelect && $.isFunction(n.beforeSelect) && 0 == n.beforeSelect(a, l, p, o, s)) return !1;
                            for (var i = 0, r = 0; r < a.length; r++) {
                                var d = a[r],
                                    u = f._itFl[f.files.add(d, "choosed")],
                                    c = f.files.check(u, a, 0 == r)
                                if (!0 === c) n.thumbnails && f.thumbnails.item(u), f.isUploadMode() && f.upload.prepare(u), n.onSelect && $.isFunction(n.onSelect) && n.onSelect(u, l, p, o, s), i++;
                                else if (f.files.remove(u, !0), c[2] || (f.isDefaultMode() && (f.set("input", ""), f.reset(), c[3] = !0), c[1] && n.dialogs.alert(c[1])), c[3]) break
                            }
                            f.isUploadMode() && i > 0 && f.set("input", ""), f.set("feedback", null), f.isAddMoreMode() && i > 0 && f.set("nextInput"), f.set("listInput", null), n.afterSelect && $.isFunction(n.afterSelect) && n.afterSelect(l, p, o, s)
                        }
                    },
                    thumbnails: {
                        create: function() {
                            null != n.thumbnails.beforeShow && $.isFunction(n.thumbnails.beforeShow) && n.thumbnails.beforeShow(p, o, s);
                            var e = $(f._assets.textParse(n.thumbnails.box)).appendTo(n.thumbnails.boxAppendTo ? n.thumbnails.boxAppendTo : p);
                            l = e.is(n.thumbnails._selectors.list) ? e : e.find(n.thumbnails._selectors.list), f.isUploadMode() && n.thumbnails._selectors.start && l.on("click", n.thumbnails._selectors.start, function(e) {
                                if (e.preventDefault(), f.locked) return !1;
                                var t = $(this).closest(n.thumbnails._selectors.item),
                                    a = f.files.find(t);
                                a && f.upload.send(a, !0)
                            }), f.isUploadMode() && n.thumbnails._selectors.retry && l.on("click", n.thumbnails._selectors.retry, function(e) {
                                if (e.preventDefault(), f.locked) return !1;
                                var t = $(this).closest(n.thumbnails._selectors.item),
                                    a = f.files.find(t);
                                a && f.upload.retry(a)
                            }), n.thumbnails._selectors.remove && l.on("click", n.thumbnails._selectors.remove, function(e) {
                                if (e.preventDefault(), f.locked) return !1;
                                var t = $(this).closest(n.thumbnails._selectors.item),
                                    a = f.files.find(t),
                                    i = function(e) {
                                        f.files.remove(a)
                                    };
                                a && (a.upload && "successful" != a.upload.status ? f.upload.cancel(a) : i())
                                //a && (a.upload && "successful" != a.upload.status ? f.upload.cancel(a) : n.thumbnails.removeConfirmation ? n.dialogs.confirm(f._assets.textParse(n.captions.removeConfirmation, a), i) : i())
                            })
                        },
                        clear: function() {
                            l && l.html("")
                        },
                        item: function(e) {
                        	$("#DescModal").modal({backdrop: 'static', keyboard: false});
                            e.icon = f.thumbnails.generateFileIcon(e.format, e.extension), e.image = '<div class="fileuploader-item-image fileuploader-loading"></div>', e.progressBar = f.isUploadMode() ? '<div class="fileuploader-progressbar"><div class="bar"></div></div>' : "", e.html = $(f._assets.textParse(e.appended && n.thumbnails.item2 ? n.thumbnails.item2 : n.thumbnails.item, e, !0)), e.progressBar = e.html.find(".fileuploader-progressbar"), e.html.addClass("file-type-" + (e.format ? e.format : "no") + " file-ext-" + (e.extension ? e.extension : "no")), e.html[n.thumbnails.itemPrepend ? "prependTo" : "appendTo"](l), e.renderImage = function() {
                                f.thumbnails.renderImage(e, !0)
                            }, f.thumbnails.renderImage(e), null != n.thumbnails.onItemShow && $.isFunction(n.thumbnails.onItemShow) && n.thumbnails.onItemShow(e, l, p, o, s)
                        },
                        generateFileIcon: function(e, n) {
                            var t = '<div style="${style}" class="fileuploader-item-icon${class}"><i>' + (n || "") + "</i></div>",
                                a = f._assets.textToColor(n);
                            return a && (f._assets.isBrightColor(a) && (t = t.replace("${class}", " is-bright-color")), t = t.replace("${style}", "background-color: " + a)), t.replace("${style}", "").replace("${class}", "")
                        },
                        renderImage: function(e, t) {
                            var a = e.html.find(".fileuploader-item-image"),
                                i = function(t) {
                                    var i = $(t);
                                    i.is("img") && i.on("load error", function(t) {
                                        "error" == t.type && r(), d(), null != n.thumbnails.onImageLoaded && $.isFunction(n.thumbnails.onImageLoaded) && n.thumbnails.onImageLoaded(e, l, p, o, s)
                                    }), i.is("canvas") && null != n.thumbnails.onImageLoaded && $.isFunction(n.thumbnails.onImageLoaded) && n.thumbnails.onImageLoaded(e, l, p, o, s), a.removeClass("fileupload-no-thumbnail fileuploader-loading").html(i)
                                },
                                r = function() {
                                    a.addClass("fileupload-no-thumbnail"), a.removeClass("fileuploader-loading").html(e.icon)
                                },
                                d = function() {
                                    var n = 0;
                                    if (e && f._pfrL.indexOf(e) > -1)
                                        for (f._pfrL.splice(f._pfrL.indexOf(e), 1); n < f._pfrL.length;) {
                                            if (f._itFl.indexOf(f._pfrL[n]) > -1) {
                                                f.thumbnails.renderImage(f._pfrL[n], !0);
                                                break
                                            }
                                            f._pfrL.splice(n, 1), n++
                                        }
                                };
                            if (a.length) {
                                if (e.image = a, "image" == e.format && f.isFileReaderSupported() && (e.appended || n.thumbnails.startImageRenderer || t)) {
                                    if (n.thumbnails.synchronImages && (-1 != f._pfrL.indexOf(e) || t || f._pfrL.push(e), f._pfrL.length > 1 && !t)) return;
                                    var u = new FileReader,
                                        c = function(e) {
                                            if (n.thumbnails.canvasImage) {
                                                var t = document.createElement("canvas"),
                                                    l = t.getContext("2d"),
                                                    o = new Image;
                                                o.onload = function() {
                                                    var e = n.thumbnails.canvasImage.height ? n.thumbnails.canvasImage.height : a.height(),
                                                        s = n.thumbnails.canvasImage.width ? n.thumbnails.canvasImage.width : a.width(),
                                                        u = o.height / e,
                                                        p = o.width / s,
                                                        c = u < p ? u : p,
                                                        m = o.height / c,
                                                        h = o.width / c,
                                                        g = Math.ceil(Math.log(o.width / h) / Math.log(2));
                                                    if (t.height = e, t.width = s, o.width < t.width || o.height < t.height || g <= 1) {
                                                        var v = o.width < t.width ? t.width / 2 - o.width / 2 : o.width > t.width ? -(o.width - t.width) / 2 : 0,
                                                            b = o.height < t.height ? t.height / 2 - o.height / 2 : 0;
                                                        l.drawImage(o, v, b, o.width, o.height)
                                                    } else {
                                                        var x = document.createElement("canvas"),
                                                            _ = x.getContext("2d");
                                                        x.width = .5 * o.width, x.height = .5 * o.height, _.fillStyle = "#fff", _.fillRect(0, 0, x.width, x.height), _.drawImage(o, 0, 0, x.width, x.height), _.drawImage(x, 0, 0, .5 * x.width, .5 * x.height), l.drawImage(x, h > t.width ? h - t.width : 0, 0, .5 * x.width, .5 * x.height, 0, 0, h, m)
                                                    }
                                                    o = null, f._assets.isBlankCanvas(t) ? r() : i(t), d()
                                                }, o.onerror = function(e) {
                                                    r(), d()
                                                }, o.src = e.target.result
                                            } else i('<img src="' + e.target.result + '" draggable="false">')
                                        };
                                    return void("string" == typeof e.file ? c({
                                        target: {
                                            result: e.file
                                        }
                                    }) : (u.onload = c, u.readAsDataURL(e.file)))
                                }
                                r()
                            } else d()
                        }
                    },
                    upload: {
                        prepare: function(e, t) {
                            e.upload = {
                                url: n.upload.url,
                                data: n.upload.data || {},
                                formData: new FormData,
                                type: n.upload.type || "POST",
                                enctype: n.upload.enctype || "multipart/form-data",
                                cache: !1,
                                contentType: !1,
                                processData: !1,
                                status: null,
                                send: function() {
                                    f.upload.send(e, !0)
                                },
                                cancel: function() {
                                    f.upload.cancel(e)
                                },
                                retry: function() {
                                    f.upload.retry(e)
                                }
                            }, e.upload.formData.append(s.attr("name"), e.file, !!e.name && e.name), (n.upload.start || t) && f.upload.send(e, t)
                        },
                        send: function(e, t) {
                            if (e.upload) {
                                var a = function(n) {
                                        e.html.removeClass("upload-pending upload-loading upload-cancelled upload-failed upload-success").addClass("upload-" + (n || e.upload.status))
                                    },
                                    i = function() {
                                        var n = 0;
                                        if (f._pfuL.length > 0)
                                            for (f._pfuL.indexOf(e) > -1 && f._pfuL.splice(f._pfuL.indexOf(e), 1); n < f._pfuL.length;) {
                                                if (f._itFl.indexOf(f._pfuL[n]) > -1 && f._pfuL[n].upload && !f._pfuL[n].upload.$ajax) {
                                                    f.upload.send(f._pfuL[n], !0);
                                                    break
                                                }
                                                f._pfuL.splice(n, 1), n++
                                            }
                                    };
                                if (n.upload.synchron)
                                    if (e.upload.status = "pending", e.html && a(), t) f._pfuL.indexOf(e) > -1 && f._pfuL.splice(f._pfuL.indexOf(e), 1);
                                    else if (-1 == f._pfuL.indexOf(e) && f._pfuL.push(e), f._pfuL.length > 1) return;
                                if (n.upload.beforeSend && $.isFunction(n.upload.beforeSend) && !1 === n.upload.beforeSend(e, l, p, o, s)) return a(), void i();
                                if (p.addClass("fileuploader-is-uploading"), e.upload.$ajax && e.upload.$ajax.abort(), delete e.upload.$ajax, delete e.upload.send, e.upload.status = "loading", e.html && (n.thumbnails._selectors.start && e.html.find(n.thumbnails._selectors.start).remove(), a()), e.upload.data)
                                    for (var r in e.upload.data) e.upload.formData.append(r, e.upload.data[r]);
                                e.upload.data = e.upload.formData, e.upload.xhr = function() {
                                    var n = $.ajaxSettings.xhr(),
                                        t = new Date;
                                    return n.upload && n.upload.addEventListener("progress", function(n) {
                                        f.upload.progressHandling(n, e, t)
                                    }, !1), n
                                }, e.upload.complete = function(e, t) {
                                    i();
                                    var a = !0;
                                    $.each(f._itFl, function(e, n) {
                                        n.upload && n.upload.$ajax && (a = !1)
                                    }), a && (p.removeClass("fileuploader-is-uploading"), null != n.upload.onComplete && "function" == typeof n.upload.onComplete && n.upload.onComplete(l, p, o, s, e, t))
                                }, e.upload.success = function(t, i, r) {
                                    e.uploaded = !0, delete e.upload, e.upload = {
                                        status: "successful"
                                    }, e.html && a(), f.set("listInput", null), null != n.upload.onSuccess && $.isFunction(n.upload.onSuccess) && n.upload.onSuccess(t, e, l, p, o, s, i, r)
                                }, e.upload.error = function(t, i, r) {
                                    e.uploaded = !1, e.upload.status = "cancelled" == e.upload.status ? e.upload.status : "failed", delete e.upload.$ajax, e.html && a(), null != n.upload.onError && $.isFunction(n.upload.onError) && n.upload.onError(e, l, p, o, s, t, i, r)
                                }, e.upload.$ajax = $.ajax(e.upload)
                            }
                        },
                        cancel: function(e) {
                            e && e.upload && (e.upload.status = "cancelled", e.upload.$ajax && e.upload.$ajax.abort(), delete e.upload.$ajax, f.files.remove(e))
                        },
                        retry: function(e) {
                            e && e.upload && (e.html && n.thumbnails._selectors.retry && e.html.find(n.thumbnails._selectors.retry).remove(), f.upload.prepare(e, !0))
                        },
                        progressHandling: function(e, t, a) {
                            if (e.lengthComputable) {
                                var i = e.loaded,
                                    r = e.total,
                                    d = Math.round(100 * i / r),
                                    u = ((new Date).getTime() - a.getTime()) / 1e3,
                                    c = u ? i / u : 0,
                                    m = r - i,
                                    h = u ? m / c : null,
                                    g = {
                                        loaded: i,
                                        loadedInFormat: f._assets.bytesToText(i),
                                        total: r,
                                        totalInFormat: f._assets.bytesToText(r),
                                        percentage: d,
                                        secondsElapsed: u,
                                        secondsElapsedInFormat: f._assets.secondsToText(u, !0),
                                        bytesPerSecond: c,
                                        bytesPerSecondInFormat: f._assets.bytesToText(c) + "/s",
                                        remainingBytes: m,
                                        remainingBytesInFormat: f._assets.bytesToText(m),
                                        secondsRemaining: h,
                                        secondsRemainingInFormat: f._assets.secondsToText(h, !0)
                                    };
                                n.upload.onProgress && $.isFunction(n.upload.onProgress) && n.upload.onProgress(g, t, l, p, o, s)
                            }
                        }
                    },
                    dragDrop: {
                        onDragEnter: function(e) {
                            clearTimeout(f.dragDrop._timer), n.dragDrop.container.addClass("fileuploader-dragging"), f.set("feedback", f._assets.textParse(n.captions.drop)), null != n.dragDrop.onDragEnter && $.isFunction(n.dragDrop.onDragEnter) && n.dragDrop.onDragEnter(e, l, p, o, s)
                        },
                        onDragLeave: function(e) {
                            clearTimeout(f.dragDrop._timer), f.dragDrop._timer = setTimeout(function(e) {
                                if (!f.dragDrop._dragLeaveCheck(e)) return !1;
                                n.dragDrop.container.removeClass("fileuploader-dragging"), f.set("feedback", null), null != n.dragDrop.onDragLeave && $.isFunction(n.dragDrop.onDragLeave) && n.dragDrop.onDragLeave(e, l, p, o, s)
                            }, 100, e)
                        },
                        onDrop: function(e) {
                            clearTimeout(f.dragDrop._timer), n.dragDrop.container.removeClass("fileuploader-dragging"), f.set("feedback", null), e && e.originalEvent && e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files.length && (f.isUploadMode() ? f.onChange(e, e.originalEvent.dataTransfer.files) : s.prop("files", e.originalEvent.dataTransfer.files)), null != n.dragDrop.onDrop && $.isFunction(n.dragDrop.onDrop) && n.dragDrop.onDrop(e, l, p, o, s)
                        },
                        _dragLeaveCheck: function(e) {
                            var t = $(e.currentTarget);
                            return !(!t.is(n.dragDrop.container) && n.dragDrop.container.find(t).length)
                        }
                    },
                    clipboard: {
                        paste: function(e) {
                            if (f._assets.isIntoView(o) && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items && e.originalEvent.clipboardData.items.length) {
                                var t = e.originalEvent.clipboardData.items;
                                f.clipboard.clean();
                                for (var a = 0; a < t.length; a++)
                                    if (-1 !== t[a].type.indexOf("image") || -1 !== t[a].type.indexOf("text/uri-list")) {
                                        var i = t[a].getAsFile(),
                                            l = new Date,
                                            s = function(e) {
                                                return e < 10 && (e = "0" + e), e
                                            },
                                            r = n.clipboardPaste > 1 ? n.clipboardPaste : 2e3;
                                        i && (i._name = "Clipboard " + l.getFullYear() + "-" + s(l.getMonth() + 1) + "-" + s(l.getDate()) + " " + s(l.getHours()) + "-" + s(l.getMinutes()) + "-" + s(l.getSeconds()), i._name += -1 != i.type.indexOf("/") ? "." + i.type.split("/")[1].toString().toLowerCase() : ".png", f.set("feedback", f._assets.textParse(n.captions.paste, {
                                            ms: r / 1e3
                                        })), f.clipboard._timer = setTimeout(function() {
                                            f.set("feedback", null), f.onChange(e, [i])
                                        }, r - 2))
                                    }
                            }
                        },
                        clean: function() {
                            f.clipboard._timer && (clearTimeout(f.clipboard._timer), delete f.clipboard._timer, f.set("feedback", null))
                        }
                    },
                    files: {
                        add: function(e, n) {
                            var t, a, i = e._name || e.name,
                                l = e.size,
                                o = f._assets.bytesToText(l),
                                r = e.type,
                                d = r ? r.split("/", 1).toString().toLowerCase() : "",
                                u = -1 != i.indexOf(".") ? i.split(".").pop().toLowerCase() : "",
                                p = i.substr(0, i.length - (-1 != i.indexOf(".") ? u.length + 1 : u.length)),
                                c = e.data || {},
                                e = e.file || e,
                                m = Date.now();
                            return f._itFl.push({
                                name: i,
                                title: p,
                                size: l,
                                size2: o,
                                type: r,
                                format: d,
                                extension: u,
                                data: c,
                                file: e,
                                id: m,
                                input: "choosed" == n ? s : null,
                                html: null,
                                upload: null,
                                choosed: "choosed" == n,
                                appended: "appended" == n,
                                uploaded: "uploaded" == n
                            }), t = f._itFl.length - 1, a = f._itFl[t], a.remove = function() {
                                f.files.remove(a)
                            }, t
                        },
                        list: function(e, t, a) {
                            var i = [];
                            return $.each(f._itFl, function(n, a) {
                                if (a.upload && !a.uploaded) return !0;
                                var l = a;
                                (e || t) && (l = (l.choosed ? "0:/" : "") + (t && null !== f.files.getItemAttr(a, t) ? f.files.getItemAttr(a, t) : a["string" == typeof a.file ? "file" : "name"])), i.push(l)
                            }), i = n.onListInput && $.isFunction(n.onListInput) ? n.onListInput(i, f._itFl, n.listInput, l, p, o, s) : i, e ? JSON.stringify(i) : i
                        },
                        check: function(e, t, a) {
                            var i = ["warning", null, !1, !1];
                            if (null != n.limit && a && t.length + f._itFl.length - 1 > n.limit) return i[1] = f._assets.textParse(n.captions.errors.filesLimit), i[3] = !0, i;
                            if (null != n.maxSize && a) {
                                r = 0;
                                if ($.each(f._itFl, function(e, n) {
                                        r += n.size
                                    }), r -= e.size, $.each(t, function(e, n) {
                                        r += n.size
                                    }), r > Math.round(1e6 * n.maxSize)) return i[1] = f._assets.textParse(n.captions.errors.filesSizeAll), i[3] = !0, i
                            }
                            if (null != n.onFilesCheck && $.isFunction(n.onFilesCheck) && a && !1 === n.onFilesCheck(t, n, l, p, o, s)) return i[3] = !0, i;
                            if (null != n.extensions && -1 == $.inArray(e.extension, n.extensions) && -1 == $.inArray(e.type, n.extensions)) return i[1] = f._assets.textParse(n.captions.errors.filesType, e), i;
                            if (null != n.fileMaxSize && e.size > 1e6 * n.fileMaxSize) return i[1] = f._assets.textParse(n.captions.errors.fileSize, e), i;
                            if (4096 == e.size && "" == e.type) return i[1] = f._assets.textParse(n.captions.errors.folderUpload, e), i;
                            var r = !1;
                            return $.each(f._itFl, function(t, a) {
                                if (a != e && 1 == a.choosed && a.file && a.file.name == e.name) return r = !0, a.file.size != e.size || a.file.type != e.type || e.file.lastModified && a.file.lastModified && a.file.lastModified != e.file.lastModified ? (i[1] = f._assets.textParse(n.captions.errors.fileName, e), i[2] = !1) : i[2] = !0, !1
                            }), !r || i
                        },
                        append: function(e) {
                            if ((e = $.isArray(e) ? e : [e]).length) {
                                for (var t, a = 0; a < e.length; a++) t = f._itFl[f.files.add(e[a], "appended")], n.thumbnails && f.thumbnails.item(t);
                                return f.set("feedback", null), f.set("listInput", null), n.afterSelect && $.isFunction(n.afterSelect) && n.afterSelect(l, p, o, s), 1 != e.length || t
                            }
                        },
                        find: function(e) {
                            var n = null;
                            return $.each(f._itFl, function(t, a) {
                                if (a.html && a.html.is(e)) return n = a, !1
                            }), n
                        },
                        remove: function(e, t) {
                            if (t || !n.onRemove || !$.isFunction(n.onRemove) || !1 !== n.onRemove(e, l, p, o, s)) {
                                if (e.html && (n.thumbnails.onItemRemove && $.isFunction(n.thumbnails.onItemRemove) && !t ? n.thumbnails.onItemRemove(e.html, l, p, o, s) : e.html.remove()), e.upload && e.upload.$ajax && e.upload.cancel && e.upload.cancel(), e.input) {
                                    var a = !0;
                                    $.each(f._itFl, function(n, i) {
                                        if (e != i && (e.input == i.input || t && e.input.get(0).files.length > 1)) return a = !1, !1
                                    }), a && (f.isAddMoreMode() && sl.length > 1 ? (f.set("nextInput"), sl.splice(sl.indexOf(e.input), 1), e.input.remove()) : f.set("input", ""))
                                }
                                f._pfrL.indexOf(e) > -1 && f._pfrL.splice(f._pfrL.indexOf(e), 1), f._pfuL.indexOf(e) > -1 && f._pfuL.splice(f._pfuL.indexOf(e), 1), f._itFl.indexOf(e) > -1 && f._itFl.splice(f._itFl.indexOf(e), 1), e = null, 0 == f._itFl.length && f.reset(), f.set("feedback", null), f.set("listInput", null)
                            }
                        },
                        getItemAttr: function(e, n) {
                            var t = null;
                            return e && (void 0 !== e[n] ? t = e[n] : e.data && void 0 !== e.data[n] && (t = e.data[n])), t
                        },
                        clear: function(e) {
                            for (var t = 0; t < f._itFl.length;) {
                                var a = f._itFl[t];
                                e || !a.appended ? (a.html && a.html && f._itFl[t].html.remove(), a.upload && a.upload.$ajax && f.upload.cancel(a), f._itFl.splice(t, 1)) : t++
                            }
                            f.set("feedback", null), f.set("listInput", null), 0 == f._itFl.length && n.onEmpty && $.isFunction(n.onEmpty) && n.onEmpty(l, p, o, s)
                        }
                    },
                    reset: function(e) {
                        e && (f.clipboard._timer && f.clipboard.clean(), $.each(sl, function(e, n) {
                            e < sl.length && n.remove()
                        }), sl = [], f.set("input", "")), f._itRl = [], f._pfuL = [], f._pfrL = [], f.files.clear(e)
                    },
                    destroy: function() {
                        f.reset(!0), f.bindUnbindEvents(!1), s.removeAttr("style"), s.insertBefore(".fileuploader"), s.prop("FileUploader", null), p.remove(), p = o = l = null
                    },
                    _assets: {
                        bytesToText: function(e) {
                            if (0 == e) return "0 Byte";
                            var n = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                                t = Math.floor(Math.log(e) / Math.log(1e3));
                            return (e / Math.pow(1e3, t)).toPrecision(3) + " " + n[t]
                        },
                        secondsToText: function(e, n) {
                            e = parseInt(Math.round(e), 10);
                            var t = Math.floor(e / 3600),
                                a = Math.floor((e - 3600 * t) / 60),
                                e = e - 3600 * t - 60 * a,
                                i = "";
                            return (t > 0 || !n) && (i += (t < 10 ? "0" : "") + t + (n ? "h " : ":")), (a > 0 || !n) && (i += (a < 10 && !n ? "0" : "") + a + (n ? "m " : ":")), i += (e < 10 && !n ? "0" : "") + e + (n ? "s" : "")
                        },
                        hasAttr: function(e, n) {
                            var t = (n = n || s).attr(e);
                            return !(!t || void 0 === t)
                        },
                        copyAllAttributes: function(e, n) {
                            return $.each(n.get(0).attributes, function() {
                                "required" != this.name && "type" != this.name && e.attr(this.name, this.value)
                            }), n.get(0).FileUploader && (e.get(0).FileUploader = n.get(0).FileUploader), e
                        },
                        getAllEvents: function(e) {
                            var n = [];
                            e = (e = e || s).get ? e.get(0) : e;
                            for (var t in e) 0 === t.indexOf("on") && n.push(t.slice(2));
                            return -1 == n.indexOf("change") && n.push("change"), n.join(" ")
                        },
                        isIntoView: function(e) {
                            var n = $(window).scrollTop(),
                                t = n + window.innerHeight,
                                a = e.offset().top,
                                i = a + e.outerHeight();
                            return n < a && t > i
                        },
                        isBlankCanvas: function(e) {
                            var n = document.createElement("canvas"),
                                t = !1;
                            return n.width = e.width, n.height = e.height, t = e.toDataURL() == n.toDataURL(), n = null, t
                        },
                        textParse: function(text, opts, noOptions) {
                            switch (opts = noOptions ? opts || {} : $.extend({}, {
                                limit: n.limit,
                                maxSize: n.maxSize,
                                fileMaxSize: n.fileMaxSize,
                                extensions: n.extensions ? n.extensions.join(", ") : null
                            }, opts), typeof text) {
                                case "string":
                                    text = text.replace(/\$\{(.*?)\}/g, function(match, a) {
                                        var a = a.replace(/ /g, ""),
                                            r = void 0 !== opts[a] && null != opts[a] ? opts[a] : "";
                                        if (a.indexOf(".") > -1 || a.indexOf("[]") > -1) {
                                            var x = a.substr(0, a.indexOf(".") > -1 ? a.indexOf(".") : a.indexOf("[") > -1 ? a.indexOf("[") : a.length),
                                                y = a.substring(x.length);
                                            if (opts[x]) try {
                                                r = eval('opts["' + x + '"]' + y)
                                            } catch (e) {
                                                r = ""
                                            }
                                        }
                                        return (r = $.isFunction(r) ? f._assets.textParse(r) : r) || ""
                                    });
                                    break;
                                case "function":
                                    text = text(opts, l, p, o, s)
                            }
                            return opts = null, text
                        },
                        textToColor: function(e) {
                            if (!e || 0 == e.length) return !1;
                            for (var n = 0, t = 0; n < e.length; t = e.charCodeAt(n++) + ((t << 5) - t));
                            for (var n = 0, a = "#"; n < 3; a += ("00" + (t >> 2 * n++ & 255).toString(16)).slice(-2));
                            return a
                        },
                        isBrightColor: function(e) {
                            var n = function(e) {
                                var n;
                                return e && e.constructor == Array && 3 == e.length ? e : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) ? [parseInt(n[1]), parseInt(n[2]), parseInt(n[3])] : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e)) ? [2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3])] : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e)) ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e)) ? [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] : "undefined" != typeof colors ? colors[$.trim(e).toLowerCase()] : null
                            };
                            return function(e) {
                                var t = n(e);
                                return t ? .2126 * t[0] + .7152 * t[1] + .0722 * t[2] : null
                            }(e) > 194
                        }
                    },
                    isSupported: function() {
                        return s && s.get(0).files
                    },
                    isFileReaderSupported: function() {
                        return window.File && window.FileList && window.FileReader
                    },
                    isDefaultMode: function() {
                        return !n.upload && !n.addMore
                    },
                    isAddMoreMode: function() {
                        return !n.upload && n.addMore
                    },
                    isUploadMode: function() {
                        return n.upload
                    },
                    _itFl: [],
                    _pfuL: [],
                    _pfrL: [],
                    disabled: !1,
                    locked: !1,
                    rendered: !1
                };
            return n.enableApi && s.prop("FileUploader", {
                open: function() {
                    s.trigger("click")
                },
                getOptions: function() {
                    return n
                },
                getParentEl: function() {
                    return p
                },
                getInputEl: function() {
                    return s
                },
                getNewInputEl: function() {
                    return o
                },
                getListEl: function() {
                    return l
                },
                getListInputEl: function() {
                    return n.listInput
                },
                getFiles: function() {
                    return f._itFl
                },
                getChoosedFiles: function() {
                    return f._itFl.filter(function(e) {
                        return e.choosed
                    })
                },
                getAppendedFiles: function() {
                    return f._itFl.filter(function(e) {
                        return e.appended
                    })
                },
                getUploadedFiles: function() {
                    return f._itFl.filter(function(e) {
                        return e.uploaded
                    })
                },
                getFileList: function(e, n) {
                    return f.files.list(e, n, !0)
                },
                updateFileList: function() {
                    return f.set("listInput", null), !0
                },
                setOption: function(e, t) {
                    return n[e] = t, !0
                },
                findFile: function(e) {
                    return f.files.find(e)
                },
                append: function(e) {
                    return f.files.append(e)
                },
                remove: function(e) {
                    return e = e.jquery ? f.files.find(e) : e, f._itFl.indexOf(e) > -1 && (f.files.remove(e), !0)
                },
                uploadStart: function() {
                    var e = this.getChoosedFiles() || [];
                    if (f.isUploadMode() && e.length > 0 && !e[0].uploaded)
                        for (var n = 0; n < e.length; n++) f.upload.send(e[n])
                },
                reset: function() {
                    return f.reset(!0), !0
                },
                disable: function(e) {
                    return f.set("disabled", !0), e && (f.locked = !0), !0
                },
                enable: function() {
                    return f.set("disabled", !1), f.locked = !1, !0
                },
                destroy: function() {
                    return f.destroy(), !0
                },
                isEmpty: function() {
                    return 0 == f._itFl.length
                },
                isDisabled: function() {
                    return f.disabled
                },
                isRendered: function() {
                    return f.rendered
                },
                assets: f._assets,
                getPluginMode: function() {
                    return f.isDefaultMode() ? "default" : f.isAddMoreMode() ? "addMore" : f.isUploadMode() ? "upload" : void 0
                }
            }), f.init(), this
        })
    }, window.$.fileuploader = {
        getInstance: function(e) {
            return (e.prop ? e : $(e)).prop("FileUploader")
        }
    }, $.fn.fileuploader.defaults = {
        limit: null,
        maxSize: null,
        fileMaxSize: null,
        extensions: null,
        changeInput: !0,
        inputNameBrackets: !0,
        theme: "default",
        thumbnails: {
            box: '<div class="fileuploader-items"><ul class="fileuploader-items-list"></ul></div>',
            boxAppendTo: null,
            item: '<li class="fileuploader-item"><div class="columns"><div class="column-thumbnail">${image}</div><div class="column-title"><div title="${name}">${name}</div><span>${size2}</span></div><div class="column-actions"><a class="fileuploader-action fileuploader-action-remove" title="Remove"><i></i></a></div></div><div class="progress-bar2">${progressBar}<span></span></div></li>',
            item2: '<li class="fileuploader-item"><div class="columns"><a href="${file}" target="_blank"><div class="column-thumbnail">${image}</div><div class="column-title"><div title="${name}">${name}</div><span>${size2}</span></div></a><div class="column-actions"><a href="${file}" class="fileuploader-action fileuploader-action-download" title="Download" download><i></i></a><a class="fileuploader-action fileuploader-action-remove" title="Remove"><i></i></a></div></div></li>',
            itemPrepend: !1,
            removeConfirmation: !0,
            startImageRenderer: !0,
            synchronImages: !0,
            canvasImage: !0,
            _selectors: {
                list: ".fileuploader-items-list",
                item: ".fileuploader-item",
                start: ".fileuploader-action-start",
                retry: ".fileuploader-action-retry",
                remove: ".fileuploader-action-remove"
            },
            beforeShow: null,
            onItemShow: null,
            onItemRemove: function(e) {
                e.children().animate({
                    opacity: 0
                }, 200, function() {
                    setTimeout(function() {
                        e.slideUp(200, function() {
                            e.remove()
                        })
                    }, 100)
                })
            },
            onImageLoaded: null
        },
        files: null,
        upload: null,
        dragDrop: !0,
        addMore: !1,
        clipboardPaste: !0,
        listInput: !0,
        enableApi: !1,
        listeners: null,
        onSupportError: null,
        beforeRender: null,
        afterRender: null,
        beforeSelect: null,
        onFilesCheck: null,
        onSelect: null,
        afterSelect: null,
        onListInput: null,
        onRemove: null,
        onEmpty: null,
        dialogs: {
            alert: function(e) {
                return alert(e)
            },
            confirm: function(e, n) {
                confirm(e) && n()
            }
        },
        captions: {
            button: function(e) {
                return "Choose " + (1 == e.limit ? "File" : "Files")
            },
            feedback: function(e) {
                return "Choose " + (1 == e.limit ? "file" : "files") + " to upload"
            },
            feedback2: function(e) {
                return e.length + " " + (e.length > 1 ? " files were" : " file was") + " chosen"
            },
            drop: "Drop the files here to Upload",
            paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',
            removeConfirmation: "Are you sure you want to remove this file?",
            errors: {
                filesLimit: "Only ${limit} files are allowed to be uploaded.",
                filesType: "Only ${extensions} files are allowed to be uploaded.",
                fileSize: "${name} is too large! Please choose a file up to ${fileMaxSize}MB.",
                filesSizeAll: "Files that you choosed are too large! Please upload files up to ${maxSize} MB.",
                fileName: "File with the name ${name} is already selected.",
                folderUpload: "You are not allowed to upload folders."
            }
        }
    }
}(jQuery);