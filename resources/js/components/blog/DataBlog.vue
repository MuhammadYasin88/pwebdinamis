<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"><h3>Blog Data</h3></div>

                    <div class="card-body">
                        <table class="table table-bordered">
                            <tr>
                                <th><center>ID</center></th>
                                <th><center>Kategori ID</center></th>
                                <th><center>User ID</center></th>
                                <th><center>Judul</center></th>
                                <th><center>Isi</center></th>
                                <th><center>Jumlah Baca</center></th>
                                <th style="width:40%"><center>Aksi</center></th>
                            </tr>
                            <tr v-for="items in blogs" :key="items.id">
                                <td>{{items.id}}
                                
                                </td>
                                <td>{{items.kategori_id}}
                                
                                </td>
                                <td>{{items.user_id}}
                                
                                </td>
                                <td>{{items.judul}}
                                
                                </td>
                                <td>{{items.isi}}
                                
                                </td>
                                <td>{{items.jumlah_baca}}
                                
                                </td>

                                <td>
                                <center>
                                <a href="#">
                                    <i class="fas fa-eye pink"> Read </i>
                                </a>
                                &nbsp;&nbsp; | &nbsp;&nbsp;
                                <a href="#">
                                    <i class="fas fa-edit cyan"> Edit </i>
                                </a>
                                &nbsp;&nbsp; | &nbsp;&nbsp;
                                <a href="#">
                                    <i class="fas fa-trash indigo"> Delete</i>
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
                blogs: {},  //menampung data di form
                form: new Form({    //mengisi data otomatis
                    id: "",
                    kategori_id: "",
                    user_id: "",
                    judul: "",
                    isi: "",
                    jumlah_baca: "",
                })
            };
        },
        methods: {  //tindakan untuk data:hapus, lihat, dll
            loadData() {
                axios.get("api/blog").then(({data}) => (this.blogs = data));
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