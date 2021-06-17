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

      def create
        form = Clients::CreateClient.call(client_params)

        if form.save
          api_success(form.client, { serializer: Clients::ClientSerializer }, 200)
        else
          api_error(400, 'Form invalid', form.errors)
        end
      end

      def show
        @client = Clients::Client.includes(:company).find(params[:id])
        api_success(@client, { serializer: Clients::ClientCompanySerializer }, 200)
      end

      private

      def client_params
        params.require(:client).permit(:first_name, :last_name, :phone, :email, :title)
      end
    end
  end
end
