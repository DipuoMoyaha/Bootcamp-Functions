document.addEventListener('alpine:init', () => {

    Alpine.data('totalPhoneBillWidget', function () {

        return {
            tarrifCharged: '',
            usageBalance: '',
            totalCost() {
                this.usageBalance = totalPhoneBill(this.tarrifCharged)
                setTimeout(() => {
                    this.usageBalance = '';
                    this.tarrifCharged='';
                }, 4000);
            }
        }

    });

})