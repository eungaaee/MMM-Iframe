# Iframe Webpage Viewer Module

![JavaScript](https://img.shields.io/badge/JavaScript-181717.svg?logo=javascript)
![GitHub repo size](https://img.shields.io/github/repo-size/av3lla/iframe-webviewer-module)
[![GitHub](https://img.shields.io/github/license/av3lla/iframe-webviewer-module)](https://mit-license.org/)

### Magic Mirror Module

A module for the [MagicMirror](https://github.com/MichMich/MagicMirror) to display a *Web Page*.

---

* ## Preview
![preview](.github/preview.png)

---

* ## Usage
    You need to install and configure the module for your MagicMirror.

    ### Setup
    Clone the module into your modules folder.
    ```shell
    cd ~/MagicMirror/modules && git clone https://github.com/Av3lla/iframe-webviewer-module
    ```
    ### [* Folder name issue](#known-issues)

    ### Configuration

    Add the module configuration to your `config.js` file.

    ```js
    {
    	module: 'Iframe',
    	position: 'top_left',
    	config: {
            headerText: 'text',
            url: 'URL',
            width: 800,
            height: 450,
            updateInterval: 1000 * 60
    	}
    },
    ```

    | Option | Description | Default | Required |
    |---|---|---|---|
    | `headerText` | set header | `Image` | X |
    | `url` | Webpage url | `null` | O |
    | `width` | Iframe Width | `800` | O |
    | `height` | Iframe Height | `450` | O |
    | `updateInterval` | change the update period in Milliseconds. | `1000*60` | X |

---

### NOTE

#### Known Issues
  * You Need to change the *folder name* from `iframe-webviewer-module` to `Iframe`.