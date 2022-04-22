<template>
  <div>

    <!-- Search box for zip filter-->
    <div id="searchHomes">
        <label for="zip">Enter Your Zip Code To Find Your Next Dream Home</label>
        <input type="text" name="zip" v-model="zipFilter">
    </div>

    <p v-if="filteredHomes.length == 0">No Results Found.</p>
    <div class="divTable minimalistBlack">
      <div class="divTableHeading" v-if="filteredHomes.length > 0" >
        <div class="divTableRow">
          <div class="divTableHead">Image</div>
          <div class="divTableHead">Address</div>
          <div class="divTableHead"># of bedrooms</div>
          <div class="divTableHead"># of bathrooms</div>
          <div class="divTableHead">Price</div>
        </div>
      </div>
      <div class="divTableBody">
        <div class="divTableRow" v-for="home in filteredHomes" v-bind:key="home.mlsNumber">
          <div class="divTableCell"><img v-bind:src="home.imageName"></div>
          <div class="divTableCell"><p>{{home.address.addressLine}}</p> <p>{{home.address.city}}, {{home.address.state}} {{home.address.zipCode}}</p></div>
          <div class="divTableCell">{{home.numberOfBedrooms}}</div>
          <div class="divTableCell">{{home.numberOfBathrooms}}</div>
          <div class="divTableCell">$ {{home.price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-search",
  data() {
    return {
        zipFilter: ''
    };
  },
  computed: {
    filteredHomes() {
        const homes = this.$store.state.homes;

        return homes.filter( home => {
            //return true if passes the filter condition ( does zipFilter = zipCode of this home)
            if (this.zipFilter == '') {
                return true;
            }
            if (this.zipFilter == home.address.zipCode) {
                return true;
            }
      
        });

    },

  }
};
</script>

<style scoped>
div.minimalistBlack {
  border: 3px solid #000000;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}
.divTable.minimalistBlack .divTableCell,
.divTable.minimalistBlack .divTableHead {
  border: 1px solid #000000;
  padding: 5px 4px;
}
.divTable.minimalistBlack .divTableBody .divTableCell {
  font-size: 13px;
}
.divTable.minimalistBlack .divTableHeading {
  background: #cfcfcf;
  background: -moz-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #cfcfcf 100%);
  background: -webkit-linear-gradient(
    top,
    #dbdbdb 0%,
    #d3d3d3 66%,
    #cfcfcf 100%
  );
  background: linear-gradient(to bottom, #dbdbdb 0%, #d3d3d3 66%, #cfcfcf 100%);
  border-bottom: 3px solid #000000;
}
.divTable.minimalistBlack .divTableHeading .divTableHead {
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  text-align: left;
}
.minimalistBlack .tableFootStyle {
  font-size: 14px;
}
/* DivTable.com */
.divTable {
  display: table;
}
.divTableRow {
  display: table-row;
}
.divTableHeading {
  display: table-header-group;
}
.divTableCell,
.divTableHead {
  display: table-cell;
}
.divTableHeading {
  display: table-header-group;
}
.divTableFoot {
  display: table-footer-group;
}
.divTableBody {
  display: table-row-group;
}

#searchHomes {
    padding: 15px;
}

input[type=text] {
    margin: 30px;
    width: 15%;
    padding: 12px 20px;
    border-radius: 5px;
    border: 2px solid green;
}

img {
    width:150px;
    height: auto;
}

</style>