module Api
  module V1
    class ClientsController < ApiController
      def index
        options = {
          page_size: params[:pageSize] ? params[:pageSize].to_i : 10,
          page: params[:page] ? params[:page].to_i : 1
        }

        @data = Clients::GetAllClients.call(options)

        api_success_pagination(@data, { each_serializer: Clients::ClientSerializer }, 200)
      end
    end
  end
end
