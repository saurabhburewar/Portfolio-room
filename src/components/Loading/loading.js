import "./loading.css";
import React, { Suspense } from "react";
import { DefaultLoadingManager } from "three";

export default function Loading() {
    DefaultLoadingManager.onProgress = (url, loaded, total) => {
        
    }
}