<template>
  <div id="header">
    <b-navbar toggleable type="light" variant="light" fixed="top">
      <b-container>
        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{name: 'index'}" tag="h1">VN News</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
          <b-nav-form class="form-navbar form-search order-2">
            <i class="icon-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#CCC" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </i>
            <b-form-input name="s" type="text" placeholder="Tìm kiếm..." autocomplete="off"/>
          </b-nav-form>
          <b-navbar-nav class="mr-auto order-1">
            <b-nav-item to="/">Trang chủ</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<style lang="scss">
.form-search {
  position: relative;
  .icon-search {
    position: absolute;
    left: 5px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #CCC;
  }
  &.form-navbar .form-control {
    border-color: #EDF0F5;
    background: #EDF0F5;
    padding-left: 30px;
    height: 35px;
    -webkit-transition: 250ms;
    transition: 250ms;
  }
}
</style>