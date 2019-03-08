/* parses highlight markup */

class HighlightParser {
  rgbToHex = (rgb) => {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  save = () => {
    let consec = [];
    let words = $('.page__text').find('.word');
    words.each((i, word_html) => {
      let bg = $(word_html).css('background-color');
      if (bg !== 'rgba(0, 0, 0, 0)')
        consec.push({ color: this.rgbToHex(bg), start: i, end: i });
    });
    let i = 0;
    while (i < consec.length-1) {
      if (consec[i].color === consec[i+1].color && consec[i].end+1 === consec[i+1].start) {
        consec[i].end = consec[i+1].end;
        consec.splice(i+1, 1);
      } else {
        ++i;
      }
    }

    $.ajax({
      method: 'POST',
      url: '/pages',
      data: {
        page_id: $('.page').attr('id'),
        highlights: consec
      },
      dataType: 'json',
      success: function(data) {}
    });

  }

  saveListener = () => {
    $('#save-highlighting').click(() => {
      this.save();  
    });
  } 
}

$(document).ready(() => {
  let parser = new HighlightParser();
  parser.saveListener();
});
