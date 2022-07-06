document.addEventListener('alpine:init', () => {

    Alpine.data('enoughAirtimeWidget', function () {

        return {
            airtimeUsage: '',
            availableAmount: '',
            airtimeBalance: '',
            calculate() {
                this.airtimeBalance = enoughAirtime(this.airtimeUsage, this.availableAmount)
                setTimeout(() => {
                    this.airtimeBalance = '';
                    this.airtimeUsage='';
                    this.availableAmount='';
                }, 5000);
            }
        }

    });

})