imdb-pro-bookmarklet
====================

This IMDb Pro Bookmarklet essentially does two things:

<strong>1.</strong> It will load a specific IMDb Pro page if you click your bookmarklet whenever your browser is not already visiting an IMDb page. The default is my IMDb Pro home page, as shown in the box below; if you prefer to visit a different IMDb Pro page instead (like yours, dear actor), enter it in the box.

<strong>2.</strong> If you're browsing a regular, non-Pro page when you click on this bookmarklet, you'll be whisked to the IMDb Pro version of that page. This is extra handy whenever an ad blitz is on. This bookmarklet takes into account desktop and mobile pages on non-Pro IMDb.

<input style="padding: 6px; width: 470px; margin-right: 10px;" type="text" value="http://pro.imdb.com/name/nm2825198/" onblur="javascript:bookmarklet_change(this.value);" />

<script charset="utf-8" type="text/javascript">// <![CDATA[
function bookmarklet_change(url) { 
	bm = document.getElementById('imdbprobookmarklet'); 
	bm.href = bm.href.replace("http://pro.imdb.com/name/nm2825198/", url); }
// ]]></script>

<strong>How to install:</strong> Enter your favorite IMDb Pro URL in the box above, then drag the following link to your bookmarks bar, and you're good to go: [<a id="imdbprobookmarklet" href="javascript:h=location.href;i=h.indexOf(%27imdb.com%27);p=h.indexOf(%27http://pro.imdb.com%27);t=h.indexOf(%27title%27);c=h.indexOf(%27combined%27);if(i==-1){window.location=%27http://pro.imdb.com/name/nm2825198/%27}else%20if(p==0){window.location=h.replace(%27http://pro%27,%27http://www%27)}else%20if(p==-1){if((t&gt;1)&amp;&amp;(c&gt;1)){h=h.substring(0,c)};window.location=h.replace(/http:\/\/[a-z]+/,%27http://pro%27);};">IMDb Pro</a>].

I am primarily a Safari user, but this bookmarklet appears to work in Chrome and Firefox, too. <strong>Let me know if it works for you!</strong>
<p id="footnote"><em>Wondering what the heck a bookmarklet is? <a href="http://lmgtfy.com/?q=bookmarklet">Click here</a>.</em></p>
