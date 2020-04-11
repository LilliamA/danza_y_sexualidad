class V1::WorkshopsController < ApplicationController

  def index
    render json: {:workshops =>[
      {
        :name => 'shasa',
        :guid => 'asjdasjas'
      }
    ]}.to_json
  end  

end