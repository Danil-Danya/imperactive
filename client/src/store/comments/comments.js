export default {
    state: {
        comments: []
    },

    actions: {
        async fetchCommentaries({ commit }) {
            try {
                const response = await fetch('/api/commentaries');
                if (response.ok) {
                    const data = await response.json();
                    console.log('Полученные данные:', data);
                    commit('setCommentaries', data);
                } 
                else {
                    console.error('Ошибка при получении данных');
                }
            } 
            catch (error) {
              console.error('Ошибка:', error);
            }
        }
    },

    mutations: {
        setCommentaries(state, commentaries) {
            state.comments = commentaries;
          }
    },

    getters: {
        getComments (state) {
            return state.comments;
        }
    }
}