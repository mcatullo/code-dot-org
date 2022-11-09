class LabsController < ApplicationController
  include LevelsHelper

  # get /labs/:level_id
  def show
    @level = Level.find(params[:level_id])
    @app_options = app_options
    render :show
  end

  # get /labs/:level_id/start_mode
  def start_mode
    @level = Level.find(params[:level_id])
    @is_start_mode = true
    @app_options = app_options
    @app_options[:isStartMode] = true
    render :show
  end
end
