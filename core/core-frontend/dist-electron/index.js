"use strict";const t=require("electron"),i=require("path");function c(e){const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(o,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return o.default=e,Object.freeze(o)}const s=c(i),l="http://localhost:5173",a=()=>{const e=new t.BrowserWindow({webPreferences:{contextIsolation:!1,nodeIntegration:!0}});t.app.isPackaged?e.loadFile(s.join(__dirname,"../index.html")):e.loadURL(l)};t.app.whenReady().then(()=>{a(),t.app.on("activate",()=>{t.BrowserWindow.getAllWindows().length===0&&a()})});t.app.on("window-all-closed",()=>{process.platform!=="darwin"&&t.app.quit()});
