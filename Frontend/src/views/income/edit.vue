<template>
	<div class="card">
		<div class="card-header">
			<h2 class="h2">Add Income</h2>
		</div>
		<div class="card-body">
			<form>
				<div class="mb-3">
					<label class="form-label">Description</label>
					<input type="text" class="form-control "
						:class="{ 'is-invalid': this.income.description.trim() === '' }"
						v-model="this.income.description" />
					<div class="invalid-feedback" v-if="this.income.description === '' || this.income.description === 0">
						Please Fill the Description
					</div>
					</div>
				<div class="mb-3">
					<label class="form-label">Amount</label>
					<input type="number" class="form-control "
						:class="{ 'is-invalid': this.income.amount === '' || this.income.amount === 0 }"
						v-model="this.income.amount" />
					<div class="invalid-feedback" v-if="this.income.amount === '' || this.income.amount <= 0">
						Please Fill the Amount
					</div>
				</div>
			
				<div class="mb-3">
					<label class="form-label">Date </label>
					<input type="date" class="form-control" v-model="this.income.date"
						:class="{ 'is-invalid': !this.checkDateValidity }" />
					<div class="invalid-feedback" v-if="!this.checkDateValidity">
						Future date now allowed
					</div>
				</div>
				<div class="d-grid gap-2 d-md-flex justify-content-md-end">
					<button type="button" v-on:click="this.saveIncome()" class="btn btn-primary">Save</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			income: {
				description: '',
				amount: 0,
				date: new Date().toISOString().substr(0, 10)
			},

		};
	},
	computed: {
		checkDateValidity() {
			const now = new Date();
			const selectedDate = new Date(this.income.date);

			if (selectedDate.getFullYear() > now.getFullYear()
				|| selectedDate.getMonth() > now.getMonth()
				|| selectedDate.getDate() > now.getDate()) {
				return false;
			}
			return true;
		}
	},
	methods: {
		saveIncome() {

			fetch('http://localhost:3000/api/incomes', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.income)
			})
				.then(() => {
					this.$router.push('/incomes');
				})
				.catch(err => {
					alert('Error occured while saving income');
					console.log(err);
				});
		}
	}
};
</script>
