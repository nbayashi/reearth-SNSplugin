reearth.ui.show(
  `<style>
  html,body { 
        margin: 0;
        width: 100px;
        min-height: 35px;
      }
  </style>

  <!-- Twitter -->

  <a class="twitter-share-button"
    href="https://twitter.com/intent/tweet"
    data-size="large"
    data-text=""
    data-url=""
    data-hashtags=""
    data-lang="ja"
    data-dnt="true"
    id="twitter-button">
  Tweet
  </a>
  <script>

  // recieve message
   window.addEventListener("message", e => {
    if (e.source !== parent) return;
    property = e.data.property;
    if (property) {
      let link = document.getElementById("twitter-button")
      if(!property.url || property.url ==""){
        link.removeAttribute("data-url");
      }else{
        link.setAttribute('data-url', property.url);
      }
      if(!property.hashtags || property.hashtags == ""){
        link.removeAttribute("data-hashtags");
      }else{
        link.setAttribute('data-hashtags', property.hashtags);
      }
      if(!property.text || property.text ==""){
        link.removeAttribute("data-text");
      }else{
        link.setAttribute('data-text', property.text);
      }
    }
  });

  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


  </script>

  `

  , { visible: true });


// post message
reearth.on("update", send);
send();

function send() {
  if (reearth.widget?.property?.default) {
    reearth.ui.postMessage({
      property: reearth.widget.property.default
    });
  }
}
