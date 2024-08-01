<template>
	<div class="card">
		<div class="card-header">
			<h2 class="h2">Add Income</h2>
		</div>
		<div class="card-body">
			<form>
				<div class="mb-3">
					<label class="form-label">Amount</label>
					<input type="number" class="form-control" v-model="this.income.amount" />
				</div>
				<div class="mb-3">
					<label class="form-label">Description</label>
					<input type="text" class="form-control" v-model="this.income.description" />
				</div>
				<div class="mb-3">
					<label class="form-label">Date </label>
					<input type="date" class="form-control" v-model="this.income.date" />
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
			}
		};
	},
	methods: {
		saveIncome() {
			fetch('http://localhost:3000/api/income', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.income)
			})
				.then(() => {
					this.$router.push('/');
				})
				.catch(err => {
					alert('Error occured while saving income');
					console.log(err);
				});
		}
	}
};
</script>
