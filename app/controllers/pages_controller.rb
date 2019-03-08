class PagesController < ApplicationController
  def index
    @pages = Page.all
  end

  def show
    @page = Page.find_by(id: params[:id])
  end

  def create
    puts params[:highlights]
    Highlight.create(highlight_params)
  end

  def highlight_params
    params.require(:highlights).permit(:page_id, highlights: {})
  end
end
