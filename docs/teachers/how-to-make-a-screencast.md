# How To Record a Screencast?

This is a short technical guide on how to record and publish screencast on MacOS. 

1. Change screen resolution to **1280x720**. This is not obvious with Mac's *Display Preferences* so I recommend downloading little tool called [RDM](https://github.com/avibrazil/RDM)

**1280x720** guarantees that video will fill the whole screen on any widescreen 16:9 device like laptops and TVs and it will look fantastic if it's made on retina display.

2. Increase font size in your code editor - **20px** or more sounds reasonable.
3. Record with *QuickTime Player* - you can use fancier software but this comes with Mac, it's free and it has all you need for basic stuff. 

![QuickTIme](/quicktime.jpg)

4. Built in Macbook microphone sucks - if you have any headphones with built-in mic they will deliver most likely higher sound quality.

5. It's the most convenient to publish video on YouTube and since most likely you don't want it to be searchable by anyone, choose visibility to **unlisted**.

![YouTube Upload](/youtube-upload.jpg)

6. Once the video is uploaded you may not see it on your profile channel (since it's unlisted) - you can find it in [YouTube Studio](https://studio.youtube.com)

![YouTube Studio](/youtube-studio.jpg)

7. To get embeddable like click on **Share** under the video, choose embed and copy just a URL to the video.

![YouTube Embed](/youtube-embed.jpg)

8. Embed the video on this site using dedicated responsibe YouTube component:

```
<YouTube src="https://www.youtube.com/embed/uif6eBb-cIA"></YouTube>
```

9. Read more from the best: [egghead.io - Recording a Great Coding Screencast](https://egghead.io/articles/recording-a-great-coding-screencast)