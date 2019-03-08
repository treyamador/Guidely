class PagesController < ApplicationController
  def index
    passage = 'That which is, or that which was, of our little fixations which encumber us '\
      'and shake us unquestioningly. They shake us to so many cores and centers '\
      'like so many of the grotesques and the little rivulets of fortune and thought. '
    @text = passage * 6
  end
end
