class V1::WorkshopsController < ApplicationController

  def index
    render json: {:workshops =>[
      {
        :name => 'Danza y Sexualidad: Hacedoras de imágenes',
        :guid => '23828'
      }
    ]}.to_json
  end  

end