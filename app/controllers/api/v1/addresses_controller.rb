module Api
  module V1
    class AddressesController < ApiController
      def index
        options = {
          page_size: params[:pageSize] ? params[:pageSize].to_i : 10,
          page: params[:page] ? params[:page].to_i : 1,
          client_id: params[:client_id]
        }
        data = Clients::GetAllClientsByClient.call(options)
        api_success_pagination(data, { each_serializer: Addresses::ClientsAddressesSerializer }, 200)
      end

      def create
        form = Clients::AddAddress.call(params[:client_id], address_params)

        if form.save
          api_success(form.address, {}, 200)
        else
          api_error(400, 'Form Invalid', form.errors)
        end
      end

      def show
        data = Addresses::Address.where(id: params[:id].to_i, client_id: params[:client_id].to_i).first

        if data
          api_success(data, { serializer: Addresses::ClientsAddressesSerializer }, 200)
        else
          api_error(404, 'Not found', [])
        end
      end

      def destroy
        address = Addresses::Address.where(id: params[:id], client_id: params[:client_id]).first

        if address
          address.destroy
          api_success({ delete: true }, {}, 200)
        else
          api_error(404, 'Not found', [])
        end
      end

      private

      def address_params
        params.require(:address).permit(:address1, :address2, :zip_code, :city, :country, :client_id)
      end
    end
  end
end
