(function () {
  const maxSize = 1000;
  const defaultSize = 400;
  $(".js-comment-body, .js-preview-body").each(function (i, commentBody) {
    $(commentBody)
      .find("a[rel='noopener noreferrer']")
      .each(function (j, imageWrapper) {
        const $img = $($(imageWrapper).children("img:first-child"));
        const params = new URL($img.attr("src")).searchParams;
        if (!$img.attr("width")) {
          const queryWidth = params.get("width");
          $img.attr(
            "width",
            queryWidth
              ? queryWidth > maxSize
                ? defaultSize
                : queryWidth
              : defaultSize
          );
        }
        if (!$img.attr("height") && params.get("height")) {
          $img.attr("height", params.get("height"));
        }
      });
  });
})();
