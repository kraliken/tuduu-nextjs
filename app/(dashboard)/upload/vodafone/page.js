import DataTable from "@/components/DataTable"
import FileUploadForm from "@/components/FileUploadForm"
import InvoiceUploadSheet from "@/components/InvoiceUploadSheet"
import { getExtractionSupportData } from "@/lib/actions/vodafone.actions"
import { ledgerAccountsColumns, phonebookColumns, teszorCodesColumns, vatsettingsColumns } from "@/lib/constants"


const InvoiceUploadPage = async () => {

    const { phonebook, ledger_accounts, vat_settings, teszor_codes } = await getExtractionSupportData()


    return (
        <div className="pt-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-2">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Invoice Processing Support
                    </h2>

                </div>
                <InvoiceUploadSheet title="Send Invoice:" triggerLabel="Upload">
                    <FileUploadForm />

                </InvoiceUploadSheet>
            </div>

            {/* <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex justify-between items-center gap-2 flex-1">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Invoice Processing Support
                    </h2>
                </div>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <DataTable columns={phonebookColumns} data={phonebook} />
                <DataTable columns={ledgerAccountsColumns} data={ledger_accounts} />
                <DataTable columns={vatsettingsColumns} data={vat_settings} />
                <DataTable columns={teszorCodesColumns} data={teszor_codes} />
            </div>
        </div >
    )
}

export default InvoiceUploadPage