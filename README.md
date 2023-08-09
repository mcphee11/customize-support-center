# customize-support-center

This example is how to add icons and change the look of the default Support Center UI above the standard HEX options that are available in the Messenger Configuration. I have chosen to add SVG "Icons" to the categories buttons/tiles asn well as adding a radius to them. I have put screen shots of the before and after options. Keep in mind these are examples you can use this concept to edit other items as the support center loads in the local DOM so as long as you understand how to edit HTML/CSS elements you are under control. Please keep in mind that if you do change these its not on Genesys to support these changes of course.


 ### Before or Default Look:

![](/docs/images/default.png?raw=true)

 ### After or Custom Look:

![](/docs/images/custom.png?raw=true)

To apply this you need to update the support-center-customize.js file with your HTTPS location of where you have SVG icons hosted. If you dont have any there is a GREAT location where you can get free icons and in SVG formats. It actually where I got these examples from. Its supplied by Google and can be found [here](https://fonts.google.com/icons).

Download the SVGs or use existing icons you ahve and make sure the that file name matches the Categories names... so in my example I have the below images:

![](/docs/images/files.png?raw=true)

    NOTE that these match the Categories names with .svg at the end

Now in the support-center-customize.js file update the line

    const imageUrl = 'https://' //add your svg hosting location

with replacing the 'https://' with your FULL publicly accessable link. In my case this is a GCP Bucket where I have the above SVG icons saved.

now to load the code you can either add this snippet directly to the page or you can deploy it as its own tag. If so ensure it loads after the WebMessenger widget deployment code.

    <script src="support-center-customize.js" defer></script>

now this "src" location needs to be where your hosting the js file. Once done it will now operate as the above example.

  ## DETAILS:

To better understand how this loads if you look at one of the first lines im doing a

    document.querySelectorAll('[aria-label^="Open category"]')

to get an array of all the "Category" buttons then doing a "for of" loop to get the titles of each one and then using this for the text & image URL. Hence the importance of the file name.

    item.innerHTML = `<img src="${imageUrl}${word}.svg" style="width: 100px"></img><p style="text-align: center;">${word}</p>`
