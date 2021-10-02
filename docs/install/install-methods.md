---
id: install-methods
title: Installation
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation Methods

Vignette provides a lot of official ways for you to get the software. We have listed what we support so far below, however, if you don't see your target platform, please [raise an issue](https://github.com/vignetteapp/vignette/issues/new) for your platform and see if we can support it.

<Tabs groupId="operating-systems">
  <TabItem value="microsoft-store" label="Microsoft Store (Windows)" default>
  
  Vignette is Coming Soon to the Microsoft Store! 
  
  
  Until then, please consinder installing it via our Portable Installation Guide
  </TabItem>
  <TabItem value="steam" label="Steam">
  Vignette is Coming Soon to Steam!
  

  Until then, please consinder installing it via our Portable Installation Guide or AUR Installation Guide.
  </TabItem>
  <TabItem value="aur" label="AUR (Linux)">

  If you prefer, to install Vignette on Linux we provide the official [`vignette-git`](https://aur.archlinux.org/packages/vignette-git/) AUR package. This guide will be using `yay`.



## Installation process

In order to install Vignette using yay, run the following command:

`yay vignette-git`



If more than one package appears you should find the right package, which should be listed as `aur/vignette-git`. In this example, that package is number `1`.

![Image of yay listing package, with aur/vignette-git on position 1](/img/install/yay-terminal-window.webp)



:::note 

When prompted for your password for sudo, enter it to proceed with the installation.

:::
  </TabItem>
  <TabItem value="portable" label="Portable">
If you do not prefer to install Vignette on your system and would like a "portable" binary, Vignette also provides such binaries.
These binaries have been tested to work on major platforms as much as the installable ones, and should not require any dependencies
aside from the aforementioned prerequisites.

## Windows

We provide Windows releases in our [GitHub](https://github.com/vignetteapp/vignette/releases/latest) as ZIP files. Find the ZIP for the respective platform
and download it. Below is an image of the Assets section of a previous release:

![Image of the `Assets` section of a previous release](/img/install/assets.png)

Extract the ZIP to your desired location and run `Vignette.exe`. The client should launch without any issues.

## Linux

Linux releases are also provided but in two forms: AppImage (coming soon) and the same ZIP file format for Windows. While the ZIP file is provided, we highly
recommend the AppImage variant as soon as it is available.

### ZIP

Linux releases are also provided alongside our Windows ZIP releases. Using the same link, download the ZIP like the original Windows ZIP and extract it on your desired
directory.

:::note
Should the executable fail to load for the first time, you may have to mark `Vignette` as executable; You can do this by right clicking into the file in your file manager, and
check **"Mark as executable"**. Alternatively, use **`chmod +x Vignette`** in the terminal.
:::

Once everything has been extracted, run `Vignette`.

  </TabItem>
</Tabs>

## Welcome to Vignette!

Don't forget to visit the [UI Overview](/client/overview.md) once your installation has completed. Alternatively, you can use the sidebar to get familiar with the interface of the application.