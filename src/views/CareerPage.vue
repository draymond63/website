<template>
  <div class="cr-main">
    <!-- First Column -->
    <div>
      <span id="header">
        <h1>Careers Mapped</h1>
        <h2>Visualizing careers to help people find their passion</h2>
      </span>
      <p>For a full overview of the code click 
        <a href="https://github.com/draymond63/passion" @click="$emit('ga-event', 'Careers', 'Viewed')">here</a>.
      </p>
      <h3>The Mapping</h3>
      <p>
        LinkedIn contains millions of accounts, each with containing previous work experience.
        A small section of this data is publicly available on Kaggle. To start mapping the
        careers into useful coordinate, the data must first be cleaned; commmon <a>NLP</a> tasks like
        <a href="https://www.datacamp.com/community/tutorials/stemming-lemmatization-python">lemmatization</a>
        and replacing acronyms.<br><br>
        Since there are many different ways to write a similar title (e.g. "senior software engineer" vs 
        "software engineer") the job entries are clustered by the words in them. Using <a>TFIDF</a>, or "term frequency-inverse document frequency,"
        the jobs are clustered from 1600 titles to 600. Now that the jobs are partially standardized, they can be grouped
        using the LinkedIn data.<br><br>
        A square matrix is made where each row and column represents one of the 600 jobs, where each coordinate contains the numbers of people that
        have both of those jobs. So, every item in the diagonal represents the number of people that have that one job. This essentially is our map
        (placing the 600 jobs into a 600-D space) but to reduce the affect of variablity, such as how often the job appears, the matrix is standardized
        using a technique called pmi, or "<a href="https://en.wikipedia.org/wiki/Pointwise_mutual_information">pointwise mutual information</a>".<br><br>
        Now, techincally, we have a map of our careers! However, it is in <a>600 dimensions</a> :(. But! There are techinques to reduce the dimensionality
        of mappings while trying to retain as much information as possible. This is how we are visualizing the data on a 2D screen! Although, it has the
        consequence of making the new axes meaningless. But don't worry, we don't care for what the coordinates of something are, but how close they are in 
        relation to others. The groups are made by clustering together close points in the higher dimensional space and then displaying them on the graph.
        The final mapping is compressed into 50 dimensions to remove redundant dimensions.
      </p>

      <!-- DUPLICATION FOR MOBILE -->
      <h3 v-if="is_mobile">The Heirarchy</h3>
      <p v-if="is_mobile">
        One arbitrary constant is how aggresive we are when clustering the points together to form our groups. We could cluster the 600 jobs into 10, 30, or 300 groups:
        it all depends on the programmer's choice. The tree below shows different levels of this. This top level, with items such as "developer" and "therapy," 
        were clustered really aggresively resulting in fewer top level groups.<br><br>
        The way to view this tree is that the smaller groups are <a>sub-categories</a> of the parent, with the final boxes being the actual jobs.
      </p>
    </div>
    <!-- Second Column -->
    <p v-if="is_mobile">
      Click <a href="2D_career_plot.html">here</a> to see the career's plotted in 2D.
      <br>Click <a href="career_grouping_tree.html">here</a> to see the career tree.
    </p>
    <div v-else>
      <p>Feel free to click around and see what happens!</p>
      <iframe src="2D_career_plot.html"/>
      <br><br>
      <h3>The Heirarchy</h3>
      <p>
        One arbitrary constant is how aggresive we are when clustering the points together to form our groups. We could cluster the 600 jobs into 10, 30, or 300 groups:
        it all depends on the programmer's choice. The tree below shows different levels of this. This top level, with items such as "developer" and "therapy," 
        were clustered really aggresively resulting in fewer top level groups.<br><br>
        The way to view this tree is that the smaller groups are <a>sub-categories</a> of the parent, with the final boxes being the actual jobs.
      </p>
      <iframe src="career_grouping_tree.html"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareerPage',
  props: {
    is_mobile: Boolean
  }
}
</script>

<style scoped>
.cr-main {
  padding: 5%;
  display: flex;
  flex-direction: column;
}
iframe {
  height: 100vh;
  width: 100%;
  border: none;
}
</style>