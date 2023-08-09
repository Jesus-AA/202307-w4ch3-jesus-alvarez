export function Card() {
  return (
    <li class="character col">
      <div class="card character__card">
        <img
          src="img/no-one.jpg"
          alt="Nombre y familia del personaje"
          class="character__picture card-img-top"
        />
        <div class="card-body">
          <h2 class="character__name card-title h4">
            ${item.name} ${item.family}
          </h2>
        </div>
        <i class="emoji"></i>
      </div>
      <div class="character__info">
        <ul class="list-unstyled">
          <li>Edad: X años</li>
          <li>
            Estado: $
            {item.isAlive
              ? '<i class="fas fa-thumbs-up"></i>'
              : '<i class="fas fa-thumbs-down"></i>'}
          </li>
        </ul>
      </div>
      <div class="character__overlay">
        <ul class="list-unstyled">${makeOverlay(item)}</ul>
        <div class="character__actions">
          <button class="character__action btn">habla</button>
          <button class="character__action btn">muere</button>
        </div>
      </div>
    </li>
  );
}
