class PagesController < ApplicationController
  def index
    @pages = Page.all
  end

  def show
    @page = Page.find_by(id: params[:id])
  end

  def create
    puts params[:highlights]
    # puts params[:id]
    # puts 'yolo'

    highlights = params[:highlights]
    highlights.each do |h|
      puts h
    end

  end
end
