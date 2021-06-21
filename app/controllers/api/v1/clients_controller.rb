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
        form = Clients::CreateClient.call(client_create_params)

        if form.save
          api_success(form.client, { serializer: Clients::ClientCompanySerializer }, 200)
        else
          api_error(400, 'Form invalid', form.errors)
        end
      end

      def show
        @client = Clients::Client.includes(:company).find(params[:id])
        api_success(@client, { serializer: Clients::ClientCompanySerializer }, 200)
      end

      def update
        form = Clients::UpdateClient.call(params[:id], client_update_params)

        if form.save
          api_success(form.client, {}, 200)
        else
          api_error(400, 'Form invalid', form.errors)
        end
      end

      def destroy
        client = Clients::Client.find(params[:id])

        client.destroy

        api_success({ delete: true }, {}, 200)
      end

      private

      def client_create_params
        params[:client][:addresses] ||= []
        params.require(:client).permit(:first_name, :last_name, :phone, :email, :title, :company_id,
                                       addresses: %i[address1 address2 zip_code city country])
      end

      def client_update_params
        params.require(:client).permit(:id, :first_name, :last_name, :phone, :email, :title, :company_id)
      end
    end
  end
end
