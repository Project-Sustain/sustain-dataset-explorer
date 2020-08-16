<template>
  <div>
    <div class="jumbotron">
      <div class="row">
        <div class="col">
          <h3>Construct Query</h3>
          <form>
            <div class="form-group">
              <label for="selectDataset">Select Dataset</label>
              <select class="form-control" id="selectDataset">

              </select>
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QueryConstructor"
}
</script>