# story-map-now
An enhanced story map layout designed for Now Institute, with the Esri ArcGIS Online Platform.

## Enhancements

1.Custom layout

2.Icons + Sankey Diagrams

## 1.Custom Layout

On the first page (not necessary but recommended) of the story map, during edit, turn into the html edit mode:

![Class tag for section icon](https://raw.githubusercontent.com/czliao/story-map-now/master/assets/screencaps/sc_html-mode.png
)

There, at the top of the page, please add a pair of

```
<style type="text/css">
  /*content of smn.css goes here*/
</style>
```
Then copy and paste the content of smn.css in between these tags. You can find the content of smn.css by clicking on the file above (assuming you are viewing this via github.com)

Done for step 1.

## 2.1 Static images (Icons)

For static images they need to be hosted somewhere. For this project I am simply using dropbox to host the static images (e.g. energy icon), referencing this:
https://ryanmo.co/2013/11/03/dropboxsharedlinks/

For the icons images I am exporting for web from illustrator, 400 x 400 px, transparent background (.png)

For the implementation, go to the section where you'd like to add the icon, in the edit pane, add the icon via the button 'insert an image, video or webpage.' There, input the dropbox url (or whatever you have) and the image should show up.

After that, go into the html mode where you'd see the code-view of the image (img tag). Around that should be a 'div' tag with class="image-container". There you'd need to add another class: 'section-icon' for the position to take effect (note that there must be a space in between):

The result should look similar to this:

```
<div class="image-container section-icon"><img alt="" src="https://dl.dropboxusercontent.com/s/z2m2uhrcxz57mvl/icon-energy.png?dl=0" /></div>
```

![Class tag for section icon](https://raw.githubusercontent.com/czliao/story-map-now/master/assets/screencaps/sc_section-icon.png
)

## 2.2 Static images (Sankey Diagrams)

Same dropbox image hosting solution. Only difference is the class name of the tag (in place of 'section-icon', this time 'sankey-diagram'):

![Class tag for sankey-diagram](https://raw.githubusercontent.com/czliao/story-map-now/master/assets/screencaps/sc_sankey-diagram.png
)
```
<div class="image-container sankey-diagram"><img alt="" src="https://dl.dropboxusercontent.com/s/j30y9guktivs4zx/1-ENERGY-baseline.png?dl=0" /></div>
```