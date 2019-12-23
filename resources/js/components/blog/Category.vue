<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"><h3>Category</h3></div>

                    <div class="card-body">
                        <button type="button" class="btn btn-success float-right"><i class="fas fa-credit-card"></i> &nbsp; Tambah Kategori </button>
                        <br>
                        <br>
                        <br>
        
                        <table class="table table-bordered">
                            
                            <tr>
                                <th><center>Kategori</center></th>
                                <th style="width:25%"><center>Jumlah Berita</center></th>
                                <th style="width:15%"><center>Aksi</center></th>
                            </tr>

                            <tr v-for="items in kategoris" :key="items.id">
                                <td>{{items.namakategori}}
                                
                                </td>

                                <td>
                                
                                </td>

                                <td>
                                <center>
                                
                                <a href="#">
                                    <i class="fas fa-edit cyan"> </i>
                                </a>
                                &nbsp;&nbsp; | &nbsp;&nbsp;
                                <a href="#">
                                    <i class="fas fa-trash indigo"> </i>
                                </a>
                                </center>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
        data() {
            return{
                editmode: false,
                kategoris: {},  //menampung data di form
                form: new Form({    //mengisi data otomatis
                    id: "",
                    namakategori: "",
                    jumlah: "",
                })
            };
        },
        methods: {  //tindakan untuk data:hapus, lihat, dll
            loadData() {
                axios.get("api/kategori").then(({data}) => (this.kategoris = data));
            } 
        },
        created(){  //menampilkan data
            this.loadData();
            Fire.$on("refreshData", () => {
                this.loadData();
            });
        }
    };
</script>
