module Api
  module V1
    class ClientsController < ApiController
      def index
        options = {
          page_size: params[:pageSize] ? params[:pageSize].to_i : 10,
          page: params[:page] ? params[:page].to_i : 1
        }

        @data = Clients::Client.all

        api_success(@data, { each_serializer: Clients::ClientSerializer }, 200)
      end
    end
  end
end
