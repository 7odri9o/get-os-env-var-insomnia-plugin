
# Get OS Env Var Insomnia Plugin

Insomnia Plugin to get Environment Variable from OS

## Getting Started

Use this project to Get OS Env Variable inside Insomnia REST App.

### Prerequisites

[Insomnia](https://insomnia.rest/download):  Debug APIs like a  human, not a robot  
[NodeJS**](https://nodejs.org): Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

** Node minimum version: **8.9.0**

### Installing

Open Insomnia APP installed on Mac, Windows or Linux and go to:        
  
**Application** &rarr; **Preferences** &rarr; **Plugins** 

Put the npm package name inside input text field and click **Install Plugin**

<img src="https://raw.githubusercontent.com/7odri9o/get-os-env-var-insomnia-plugin/master/images/install-plugin.png#install-plugin" alt="Install Plugin"
	title="Install Plugin Screen" />

And then the plugin will be installed.

Enable the plugin by clicking on **Enable?** Switcher.

<img src="https://raw.githubusercontent.com/7odri9o/get-os-env-var-insomnia-plugin/master/images/enable-plugin.png#enable-plugin" alt="Enable Plugin"
	title="Enable Plugin Screen" />

## Using the Plugin

First, you need to create your Env Variables on your OS System.
Create it accordingly with your system.

<details><summary>Windows</summary>
<p>

Open Windows Explorer by clicking **CTRL** + **E**.    
Right Click on **This Computer** and then click on **Properties**.  
Click on **Advanced System Settings** in the left menu.  
In the Advanced Tab click on **Environment Variables**.  
Put the name and the value for the variable you need.  

</p>
</details>

<details><summary>Linux</summary>
<p>

Preferably create your Environment Variables on /etc/profile.  
Edit /etc/profilea and set the code below  

```
  EXPORT VARIABLE_NAME="VARIABLE VALUE"
```  

Save the file and reload the file running:  

```
  source /etc/profile
```  

</p>
</details>

## Built With

* [NodeJS](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## Authors

* **Rodrigo Rocha** - [7odri9o](https://github.com/7odri9o)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
