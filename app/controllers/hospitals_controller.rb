require 'json'

class HospitalsController < ApplicationController

  def index
    max_distance = 5000
    max_results = 20

    location = {lat: params[:lat].to_f, lon: params[:lon].to_f, radius: (params[:radius] || max_distance).to_i}

    @hospitals = Hospital.find_hospitals_sorted(location[:lat],
                                                location[:lon],
                                                location[:radius],
                                                params[:sort],
                                                (params[:max_results] || max_results).to_i)
    respond_to do |format|
      format.html # index.html.haml
      format.json  { render :json => @hospitals }
    end
  end

end
