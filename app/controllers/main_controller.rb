require 'json'

class MainController < ApplicationController
  def index
    @hospitals = Hospital.find_hospitals_near_latlon(53.9431092443469, -2.2680899081386, 500000)
    @json = @hospitals.to_json
  end
end
