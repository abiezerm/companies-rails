module Api
  module V1
    class CompaniesController < ApiController
      def index
        options = {
          page_size: params[:pageSize] ? params[:pageSize].to_i : 10,
          page: params[:page] ? params[:page].to_i : 1
        }

        data = Companies::GetAllCompanies.call(options)

        api_success_pagination(data, { each_serializer: Companies::CompanySerializer }, 200)
      end

      def create
        form = Companies::CreateCompany.call(company_create_params)

        if form.save
          api_success(form.company, { serializer: Companies::CompanySerializer }, 200)
        else
          api_error(400, 'Form Invalid', form.errors)
        end
      end

      def show
        data = Companies::Company.includes(:clients).find(params[:id])

        api_success(data, { serializer: Companies::CompanySerializer }, 200)
      end

      def show_clients
        options = {
          page_size: params[:pageSize] ? params[:pageSize].to_i : 10,
          page: params[:page] ? params[:page].to_i : 1,
          company_id: params[:company_id]
        }

        data = Companies::GetAllClientsByCompany.call(options)

        api_success_pagination(data, { each_serializer: Clients::ClientSerializer }, 200)
      end

      def update
        form = Companies::UpdateCompany.call(params[:id], company_update_params)

        if form.save
          api_success(form.company, { serializer: Companies::CompanySerializer }, 200)
        else
          api_error(400, 'Form invalid', form.errors)
        end
      end

      def destroy
        company = Companies::Company.find(params[:id])

        company.destroy

        api_success({ delete: true }, {}, 200)
      end

      private

      def company_create_params
        params.require(:company).permit(:name, :status, :phone)
      end

      def company_update_params
        params.require(:company).permit(:id, :name, :status, :phone)
      end
    end
  end
end
