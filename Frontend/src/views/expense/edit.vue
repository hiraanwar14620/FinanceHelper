<template>
	<div class="card">
		<div class="card-header">
			<h2 class="h2">Add Expense</h2>
		</div>
		<div class="card-body">
			<form>
				<div class="mb-3">
					<label class="form-label">Item Purchased</label>
					<input type="text" class="form-control " :class="{ 'is-invalid': this.expense.item.trim() === '' }"
						v-model="this.expense.item" />
					<div class="invalid-feedback" v-if="this.expense.item === '' || this.expense.item === 0">
						Please Fill the Field
					</div>
				</div>
				<div class="mb-3">
					<label class="form-label">Item Price</label>
					<input type="number" class="form-control "
						:class="{ 'is-invalid': this.expense.price === '' || this.expense.price <= 0 }"
						v-model="this.expense.price" />
					<div class="invalid-feedback" v-if="this.expense.price === '' || this.expense.price === 0">
						Please Fill the Field
					</div>
				</div>
				<div class="mb-3">
					<label class="form-label">Quantity</label>
					<input type="number" class="form-control "
						:class="{ 'is-invalid': this.expense.quantity === '' || this.expense.quantity === 0 }"
						v-model="this.expense.quantity" />
					<div class="invalid-feedback" v-if="this.expense.quantity === '' || this.expense.quantity === 0">
						Please Fill the Field
					</div>
				</div>
				<div class="mb-3">
					<label class="form-label">Date of Purchase</label>
					<div class="input-group has-validation">
						<input type="date" class="form-control" :class="{ 'is-invalid': !this.isDateValid }"
							v-model="this.expense.date" />
						<div class="invalid-feedback" v-if="!this.isDateValid">
							Future date now allowed
						</div>
					</div>
				</div>
				<div class="d-grid gap-2 d-md-flex justify-content-md-end">
					<button type="button" v-on:click="this.saveExpense(this.expense._id)" class="btn btn-primary">Save</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
	data() {
		return {
			expense: {
				item: '',
				price: 0,
				quantity: 1,
				date: new Date().toISOString().substr(0, 10)
			},

			isDateValid: true
		};
	},
	mounted(){
		const id = useRoute().params.id;
		if(id)
		this.getExpense(id)
	},
	methods: {
		getExpense(id){
			fetch('http://localhost:3000/api/expenses/'+id)
				.then(response => response.json())
				.then(json => {
					this.expense = json;
					console.log(this.expense);
				})
				.catch(error => {
					alert('Error occured while getting expense');
					console.error(error);
				});
		},
		updateExpense(id){
			const now = new Date();
			const selectedDate = new Date(this.expense.date);

			if (selectedDate.getFullYear() > now.getFullYear()
				|| selectedDate.getMonth() > now.getMonth()
				|| selectedDate.getDate() > now.getDate()) {
				this.isDateValid = false;
				return;
			}
			fetch('http://localhost:3000/api/expenses/'+id, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.expense)
			})
				.then(() => {
					this.$router.push('/expenses');
				})
				.catch(err => {
					alert('Error occured while saving expense');
					console.log(err);
				});
          },
		saveExpense(_id) {
			if(_id){
				console.log(_id);
				this.updateExpense(_id);
			}
			const now = new Date();
			const selectedDate = new Date(this.expense.date);

			if (selectedDate.getFullYear() > now.getFullYear()
				|| selectedDate.getMonth() > now.getMonth()
				|| selectedDate.getDate() > now.getDate()) {
				this.isDateValid = false;
				return;
			}
			fetch('http://localhost:3000/api/expenses', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.expense)
			})
				.then(() => {
					this.$router.push('/expenses');
				})
				.catch(err => {
					alert('Error occured while saving expense');
					console.log(err);
				});
		}
	}
};
</script>
