<template>
  <div class="col-md-6 col-xl-4 col-12 mb-4" style="min-height: 500px !important">
    <div class="card mb-4 box-shadow" style="height: 100%">
      <img
        class="card-img-top"
        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        alt="Thumbnail [100%x225]"
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18c779ad031%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18c779ad031%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7766342163086%22%20y%3D%22119.83347988128662%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        data-holder-rendered="true"
        style="height: 225px; width: 100%; display: block"
      />
      <div class="card-body d-flex flex-column justify-content-between">
        <div class="d-flex flex-column">
          <span class="text-muted mb-2">{{ new Date(article.createdAt).toDateString() }}</span>
          <h5>{{ article.title }}</h5>
          <p class="card-text">
            {{ article.description }}
          </p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              type="button"
              @click="pushDetailPage(article.slug)"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <template v-if="user == article.author.username">
              <button
                type="button"
                @click="pushEditPage(article.slug)"
                class="btn btn-sm btn-outline-primary"
              >
                Edit
              </button>
              <button
                type="button"
                @click="removeArticle(article.slug)"
                class="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </template>
          </div>

          <small class="text-muted"
            >{{ calcReadingArticles(article.title, article.description, article.body) }} mins</small
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { toast } from 'vue3-toastify'
import { mapState } from 'vuex'

export default {
  data() {
    return { wpm: 225 }
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      user: ({ auth: { user } }) => user.username
    })
  },
  methods: {
    calcReadingArticles(article_title, article_description, article_body) {
      let title = article_title.trim().split(/\s+/).length
      let description = article_description.trim().split(/\s+/).length
      let body = article_body.trim().split(/\s+/).length
      return Math.ceil((title + description + body) / this.wpm)
    },
    pushDetailPage(slug) {
      this.$router.push(`/article/${slug}`)
    },
    async removeArticle(slug) {
      const { msg, success } = await this.$store.dispatch('deleteArticle', slug)
      success ? toast.success(msg) : toast.error(msg)
      success && this.$store.dispatch('getArticles')
    },
    pushEditPage(slug) {
      this.$router.push(`/edit-article/${slug}`)
    }
  }
}
</script>
