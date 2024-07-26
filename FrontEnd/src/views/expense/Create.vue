<template>
    <form>


        <div>
            Item Purchased : <input type="text" v-model="this.expense.item">

        </div>
        <div>
            Price : <input type="number" v-model="this.expense.price">

        </div>
        <div>
            Quantity : <input type="number" v-model="this.expense.quantity">

        </div>
        <div>
            Date : <input type="date" v-model="this.expense.date">

        </div>
        <div>
            <button type="button" v-on:click="this.saveExpense()">Submit</button>
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return { expense: { item: "", price: 0, quantity: 1, date: new Date() } }
    }, methods: {
        saveExpense() {
            fetch("http://localhost:3000/api/expense",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(this.expense)
                })
                .then(function (res) { alert("Expense saved") })
                .catch(function (res) { alert("Error occured while saving expense") })

        }
    }
}

</script>