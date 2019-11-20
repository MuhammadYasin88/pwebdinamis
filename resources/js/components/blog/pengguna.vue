<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                       <table class="table table-bordered">
                                
                    <tr>
                      <th style="width: 25%">nama</th>
                      <th colspan = "3">Aksi</th>
                    </tr>
              
                 
                  
                  <tr>
                  <td>Amat Solar </td>
                  <td>
                    <a href>
                        <i class="fas fa-eye pink">Lihat</i>
                    </a>
                    |
                    <a href>
                        <i class="fas fa-edit">Edit</i>
                    </a>
                    |
                    <a href>
                        <i class="fas fa-trash-alt">Hapus</i>
                    </a>
                  
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
