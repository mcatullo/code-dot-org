class LabsController < ApplicationController
  include LevelsHelper

  # get /labs/level_id
  def show
    @level = Level.find(params[:level_id])
    @app_options = app_options
    render :show
  end
end
