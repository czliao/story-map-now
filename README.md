# story-map-now
An enhanced story map layout designed for Now Institute, with the Esri ArcGIS Online Platform.

## Enhancements

Custom layout
Sankey Diagrams

## 1.Power up the StoryMap

In order to hook up the diagrams:

##### simply add these two lines of code only once in the whole storymap
```
<script type="text/javascript" src="https://rawgit.com/czliao/story-map-now/master/smn.js"></script>
<link rel="stylesheet" href="http://rawgit.com/czliao/story-map-now/master/smn.css" />
```
Done.

## 2.1 Static images (Icons)

I am simply using dropbox to host the static images (e.g. energy icon), referencing this:
https://ryanmo.co/2013/11/03/dropboxsharedlinks/

For the icons images I am exporting for web from illustrator, 400 x 400 px, transparent background (.png)

For the implementation I am adding this line of code in the section where I wish it to appear at the top of the content (must be in html mode when editing)
```
<img alt="" class="section-icon" src="https://dl.dropboxusercontent.com/s/z2m2uhrcxz57mvl/icon-energy.png?dl=0" />
```

## 2.2 Static images (Sankey Diagrams)

Same dropbox image hosting solution. Only difference is the class name of the tag:
```
<img alt="" class="sankey-diagram" src="https://dl.dropboxusercontent.com/s/j30y9guktivs4zx/1-ENERGY-baseline.png?dl=0" />
```