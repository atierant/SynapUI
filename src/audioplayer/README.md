Nanodio
=======

Description
-----------

Nanodio is the smallest audio player ever coded!
It's simple, accessible and can be used with strict xHtml pages.

How to use it
-------------

In a web page, just include `jquery.js` then the `jquery.nanodio.js` file.

Nanodio is intended to be applied on links. So you can just need to mark some links as audio files, then activate nanodio for those files.

Here is an example:

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
    <html version="XHTML+RDFa 1.0" xml:lang="fr">

      <head>
        <title>musique</title>

        <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8" />

        <script type="text/javascript" src="/js/jquery.js"></script>
        <script type="text/javascript" src="/js/jquery.nanodio.js"></script>
        <script type="text/javascript">
        $(function(){
            // Activate the first link
            $('a[type="audio/ogg"]').nanoplayer();

            // Activate the second link
            $('a.audio').nanoplayer();

            // This could activate the both two in one line :  $('a[type="audio/ogg"], a.audio').nanoplayer();
        });
        </script>
      </head>
      <body>
        ...
        <a type="audio/ogg" href="my_favorite_creative_commons_music.ogg">A file to play</a>
        ...
        <a class="audio" href="my_favorite_creative_commons_music.ogg">A file to play</a>
      </body>
    </html>

So here is the deal:
  - If the browser is able to read the file by itself, just one click on the link will play the file.
  - If the browser can't read it by itself but has a plugin to do that... it will probably launch it.
  - If the browser can't read the file, it will download it. So you can read it in your favorite sound player


So it's working with any browser (even lynx! Here is the proof: http://www.youtube.com/watch?v=A-Y9aPnojTM)

