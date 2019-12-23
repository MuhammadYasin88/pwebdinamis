<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"><h3>User</h3></div>

                    <div class="card-body">
                        <button type="button" class="btn btn-success float-right"><i class="fas fa-credit-card"></i> &nbsp; Tambah User </button>
                        <br>
                        <br>
                        <br>

                        <table class="table table-bordered">
                            <tr>
                                <th><center>Nama</center></th>
                                <th style="width:15%"><center>Aksi</center></th>
                            </tr>
                            <tr>
                                <td>
                                qwert
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
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
