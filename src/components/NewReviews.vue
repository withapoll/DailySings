<template>
  <div class="new-reviews-cards">
    <div class="new-reviews-card">
      <div class="card-header">
        <div class="user">
          <img src="../../public/user-1.jpg" alt="User 1" />
          <div class="user-info">
            <p>Пользователь</p>
            <p>2 дня назад</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h3>Заголовок</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Rhoncus eu nibh pretium lacus ac. Quis quam ut
          nulla sagittis integer vehicula amet vulputate adipiscing. Venenatis turpis nec massa ut
          in. Lectus lorem aenean placerat vestibulum quis vulputate odio elementum mi. Erat
          ultricies felis eu aenean nulla sit vel tortor ullamcorper. Libero egestas integer rhoncus
          nullam nisl. Massa scelerisque pellentesque ultrices sagittis. Integer nisi tincidunt
          phasellus at a mauris sit. Nisl neque fusce risus id. Laoreet at tempor est velit vitae.
          Vitae velit tortor nec at rutrum vel quis aliquet lectus. Facilisis integer felis molestie
          nunc etiam. A auctor purus nisl arcu. Tincidunt elementum justo egestas in mauris
          interdum. Malesuada donec vitae fringilla auctor. Volutpat enim etiam sociis tortor urna
          eleifend. Nec in semper enim morbi maecenas fames sapien magna. A venenatis pellentesque
          purus volutpat. Elit ut dapibus risus potenti pulvinar in arcu erat est. Vitae tristique
          facilisis tellus nunc eget. Sagittis viverra ultrices nisl sit pretium. Viverra gravida id
          morbi a convallis. Suscipit morbi varius metus lacinia. Nisl elementum praesent eget
          tincidunt.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.new-reviews-cards {
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  gap: 2rem;
  margin-left: 2rem;
}

.new-reviews-card {
  width: 55.5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-bottom: 2rem;
  background-color: #191919;
  border-radius: 1rem;
}

.card-header {
  margin-top: 0.7rem;
  margin-left: 0.7rem;
  width: 54rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: #9c1e6b;
  border-radius: 1rem;
}

.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
}

.user-info p {
  margin: 0;
}

.card-body {
  width: fit-content;
  height: fit-content;
  margin-left: 1rem;
  p {
    margin: 0;
    width: 52rem;
  }
  h3 {
    margin-bottom: 0.7rem;
  }
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
