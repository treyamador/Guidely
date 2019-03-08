class PagesController < ApplicationController
  def index
    @pages = Page.all
  end

  def show
    @page = Page.find_by(id: params[:id])
    @highlight = Highlight.where(page_id: params[:id])
  end

  def create
    params[:highlights].each do |k, v|
      Highlight.create!(
        page_id: params[:page_id],
        start: v['start'].to_i,
        end: v['end'].to_i,
        color: v['color']
      )
    end
    render json: { response: :ok }
  end

  def highlight_params
    params.require(:highlights).permit(:page_id, highlights: [ :color, :start, :end])
  end
end
