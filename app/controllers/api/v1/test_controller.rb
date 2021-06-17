class Api::V1::TestController < ApiController
  def index
    render json: { hola: 'klk' }, status: :ok
  end
end
